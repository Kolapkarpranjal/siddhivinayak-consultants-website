# Images Directory

This directory is for storing all your website images.

## Folder Structure:
```
src/assets/images/
├── logo/           # Company logos
├── hero/           # Hero section images
├── services/       # Service-related images
├── team/           # Team member photos
├── gallery/        # General gallery images
└── icons/          # Custom icons (if not using icon libraries)
```

## How to use images in your components:

### 1. Import the image:
```javascript
import logoImage from '../assets/images/logo/company-logo.png';
```

### 2. Use in JSX:
```javascript
<img src={logoImage} alt="Company Logo" className="w-32 h-32" />
```

### 3. Or use require() for dynamic imports:
```javascript
<img src={require('../assets/images/hero/hero-image.jpg')} alt="Hero" />
```

## Recommended Image Formats:
- **PNG**: For logos, icons, and images with transparency
- **JPG**: For photographs and complex images
- **SVG**: For scalable icons and simple graphics
- **WebP**: For modern browsers (better compression)

## Image Optimization Tips:
1. Compress images before adding them
2. Use appropriate sizes (don't use 2000px images for thumbnails)
3. Consider using responsive images with different sizes
4. Add proper alt text for accessibility

## Example Usage in Components:
```javascript
import React from 'react';
import heroImage from '../assets/images/hero/hero-bg.jpg';

const HeroSection = () => {
  return (
    <div className="relative h-screen">
      <img 
        src={heroImage} 
        alt="Hero Background" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">Welcome to Our Company</h1>
      </div>
    </div>
  );
};
```
