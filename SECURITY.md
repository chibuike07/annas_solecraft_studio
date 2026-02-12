# Security & Production Hardening

This document outlines the security measures and production-readiness improvements implemented in the Ngozi Product Showcase application.

## 🔒 Security Fixes Applied

### 1. **Input Sanitization & XSS Prevention**

#### Enhanced `sanitizeInput()` Function

- **Removed**: Only basic character filtering (`<>'"`)
- **Added**:
  - Comprehensive HTML tag removal: `/<[^>]*>/g`
  - Full special character filtering: `/<>\"'\`\\/`
  - Control character removal: `/[\x00-\x1F\x7F]/g`
  - Multiple whitespace collapsing
  - Type checking to prevent non-string inputs

#### Enhanced `sanitizeText()` Function

- Type checking for non-string inputs
- Returns empty string for invalid inputs
- Prevents rendering of potentially malicious content

#### Image Path Validation

- `resolveImagePath()` now validates that paths start with `/`
- Returns empty string for invalid paths
- Prevents directory traversal attacks

---

### 2. **Quantity Input Validation**

#### New `validateQuantity()` Function

- **Type checking**: Only accepts numeric values
- **Range validation**: Minimum of 1, maximum of 100 (configurable)
- **Integer enforcement**: Converts to floor integer
- **Default fallback**: Returns 1 for invalid inputs

#### ProductCard Input Handling

- **Quantity constraints**: `min="1"` and `max="100"` attributes
- **useCallback hooks**: Memoized handlers prevent unnecessary re-renders
- **Error state tracking**: Visual feedback for invalid inputs
- **Input validation**: Prevents NaN, negative numbers, and excessive values
- **Disabled state**: Increment button disabled at MAX_QUANTITY, decrement button disabled at 1

---

### 3. **WhatsApp URL Security**

#### New `isValidWhatsAppNumber()` Function

- Validates WhatsApp number format: 10-15 digits only
- Prevents injection attacks through phone number parameter
- Regex validation: `/^[0-9]{10,15}$/`

#### Enhanced `buildWhatsAppUrl()` Function

- **Input validation**: All parameters checked before use
- **Number validation**: Verifies WhatsApp number is properly formatted
- **Price validation**: Ensures prices are positive numbers
- **Quantity validation**: Uses `validateQuantity()` function
- **Message length limit**: Enforces 4096 character max (WhatsApp limit)
- **Error handling**: Returns `#` on validation failure with console logging
- **Try-catch wrapper**: Catches encoding errors gracefully

---

### 4. **Production Security Headers** (next.config.js)

Added HTTP security headers via Next.js headers configuration:

```
X-Content-Type-Options: nosniff
  → Prevents MIME type sniffing attacks

X-XSS-Protection: 1; mode=block
  → Enables browser XSS protection

X-Frame-Options: SAMEORIGIN
  → Prevents clickjacking attacks

Referrer-Policy: strict-origin-when-cross-origin
  → Controls referrer information leakage

Permissions-Policy
  → Disables camera, microphone, and geolocation
```

#### Additional Next.js Security Settings

- `poweredByHeader: false` - Hides Next.js version information
- `reactStrictMode: true` - Enables React strict mode for detecting unsafe practices

---

### 5. **Content Security & Data Validation**

#### Product Data Validation

- Type checking for product.name, product.price
- Fallback values for missing properties
- Price validation ensures > 0

#### Quantity Calculations

- Pre-validation before sending to WhatsApp
- Final quantity validated again at submit time
- Prevents manipulation of quantity in transit

#### Message Construction

- All user-visible text sanitized
- Numeric values validated
- Template literals with validated values only
- Filter removes empty/falsy values

---

### 6. **React Best Practices**

#### Performance & Security

- `useCallback()` for memoized event handlers
- Dependency arrays properly declared
- Prevents stale closure issues
- Reduces unnecessary component re-renders

#### Accessibility & Validation

- Proper ARIA labels on all interactive elements
- `aria-label` on increment/decrement buttons
- Input type validation with `inputMode="numeric"`
- Semantic HTML structure maintained

---

### 7. **Code Injection Prevention**

#### Protected Areas

- ✅ Product names - sanitized before rendering
- ✅ Product descriptions - sanitized before rendering
- ✅ Category titles - sanitized before sending to WhatsApp
- ✅ Promo codes - sanitized and validated
- ✅ Quantity input - type and range validated
- ✅ URLs - encoded with `encodeURIComponent()`
- ✅ WhatsApp number - regex validated

#### Attack Vectors Blocked

- ✗ XSS via HTML injection
- ✗ URL injection in WhatsApp links
- ✗ Prototype pollution
- ✗ DOM-based XSS
- ✗ Quantity overflow/underflow
- ✗ Negative quantity manipulation
- ✗ MIME sniffing
- ✗ Clickjacking

---

## 🚀 Production Readiness

### Configuration

- Static export for GitHub Pages deployment
- Optimized image handling (unoptimized for static export)
- Styled-components SSR support via registry
- Environment-based base path configuration

### Performance

- Memoized callbacks prevent unnecessary re-renders
- Optimized re-render cycles with strict React mode
- Minimal bundle bloat - no extra dependencies

### Error Handling

- Console logging for security validation failures
- Graceful fallbacks for validation errors
- Invalid states return safe defaults

### Testing Ready

- Clear separation of concerns
- Validation functions testable independently
- Type-safe inputs and outputs
- Easy to add unit tests

---

## 📋 Constants

```typescript
// Maximum quantity allowed per order
export const MAX_QUANTITY = 100;

// WhatsApp number validation
const WHATSAPP_NUMBER = "2348121485310";
```

---

## ⚠️ Security Best Practices

### Do's ✅

- Always validate user input
- Sanitize before rendering or using in URLs
- Use type checking for critical functions
- Implement rate limiting (if backend is added)
- Log security events
- Keep dependencies updated

### Don'ts ❌

- Don't trust user input
- Don't use `dangerouslySetInnerHTML`
- Don't expose internal errors to users
- Don't skip validation in frontend
- Don't hardcode sensitive data
- Don't rely solely on frontend security

---

## 🔄 Validation Flow

```
User Input (Quantity)
    ↓
Input Change Handler
    ↓
Type Check (number?)
    ↓
Parse & Validate Range
    ↓
Apply MAX/MIN constraints
    ↓
Update State
    ↓
On Buy Click
    ↓
Final Validation (validateQuantity)
    ↓
Build Safe WhatsApp URL
    ↓
All inputs sanitized & encoded
    ↓
Open WhatsApp (safe)
```

---

## 📝 Maintenance Notes

- Review and update `MAX_QUANTITY` based on business requirements
- Monitor console for validation failures
- Keep security headers updated with new standards
- Add unit tests for validation functions
- Review WhatsApp message format for compliance
- Audit sanitization functions periodically

---

## Version

Security Hardening: v1.0.0 (February 2026)
