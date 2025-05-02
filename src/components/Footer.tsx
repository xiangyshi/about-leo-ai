import React from 'react';

// src/components/Footer.tsx
export default function Footer() {
    return (
        <footer className="text-center text-sm text-gray-500 py-6 border-t mt-16">
            © {new Date().getFullYear()} Leo Shi. All rights reserved.
        </footer>
    );
}
  