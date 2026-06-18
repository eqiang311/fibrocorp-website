'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const closeTimer = useRef(null)

  const openDropdown  = () => { clearTimeout(closeTimer.current); setDropdownOpen(true) }
  const closeDropdown = () => { closeTimer.current = setTimeout(() => setDropdownOpen(false), 350) }

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 40px',
      background: '#0a1a0f',
      borderBottom: '0.5px solid #1e3d26',
      position: 'relative',
      zIndex: 100
    }}>
      {/* Logo */}
      <Link href="/" style={{
        fontFamily: 'Space Grotesk, sans-serif',
        fontSize: '18px',
        fontWeight: '500',
        color: '#e8f5ed',
        letterSpacing: '0.5px',
        textDecoration: 'none'
      }}>
        FibroCorp
      </Link>

      {/* Nav links */}
      <div style={{ display: 'flex', gap: '28px', alignItems: 'center' }}>

        {/* Products with dropdown */}
        <div
          style={{ position: 'relative' }}
          onMouseEnter={openDropdown}
          onMouseLeave={closeDropdown}
        >
          <Link href="/products" style={{
            fontSize: '13px',
            color: '#7aab88',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '4px'
          }}>
            Products
            <span style={{
              fontSize: '9px',
              color: '#4a7a5a',
              transition: 'transform 0.2s ease',
              display: 'inline-block',
              transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)'
            }}>
              ▾
            </span>
          </Link>

          {/* Dropdown menu */}
          {dropdownOpen && (
            <div style={{
              position: 'absolute',
              top: 'calc(100% + 6px)',
              left: '50%',
              transform: 'translateX(-50%)',
              background: '#0d2218',
              border: '0.5px solid #1e3d26',
              borderRadius: '4px',
              minWidth: '260px',
              overflow: 'hidden',
              boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
              zIndex: 200
            }}>
              {/* Small arrow pointer */}
              <div style={{
                position: 'absolute',
                top: '-5px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '10px',
                height: '10px',
                background: '#0d2218',
                border: '0.5px solid #1e3d26',
                borderBottom: 'none',
                borderRight: 'none',
                rotate: '45deg'
              }} />

              <Link
                href="/products/molded-fiber-packaging"
                style={{
                  display: 'block',
                  padding: '16px 20px',
                  borderBottom: '0.5px solid #1e3d26',
                  textDecoration: 'none'
                }}
                onMouseEnter={e => e.currentTarget.style.background = '#142b1c'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >
                <div style={{
                  fontSize: '12px',
                  fontWeight: '500',
                  color: '#e8f5ed',
                  marginBottom: '4px'
                }}>
                  Molded Fiber Packaging Equipment
                </div>
                <div style={{
                  fontSize: '11px',
                  color: '#4a7a5a',
                  fontWeight: '300'
                }}>
                  1 machine. Multiple products.
                </div>
              </Link>

              <Link
                href="/products/molded-fiber-pallet"
                style={{
                  display: 'block',
                  padding: '16px 20px',
                  textDecoration: 'none'
                }}
                onMouseEnter={e => e.currentTarget.style.background = '#142b1c'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >
                <div style={{
                  fontSize: '12px',
                  fontWeight: '500',
                  color: '#e8f5ed',
                  marginBottom: '4px'
                }}>
                  Molded Fiber Pallet
                </div>
                <div style={{
                  fontSize: '11px',
                  color: '#4a7a5a',
                  fontWeight: '300'
                }}>
                  Exclusive global launch. Seeking partners.
                </div>
              </Link>
            </div>
          )}
        </div>

        <Link href="/proof" style={{ fontSize: '13px', color: '#7aab88', textDecoration: 'none' }}>Proof</Link>
        <Link href="/opportunity" style={{ fontSize: '13px', color: '#7aab88', textDecoration: 'none' }}>Opportunity</Link>
        <Link href="/sustainability" style={{ fontSize: '13px', color: '#7aab88', textDecoration: 'none' }}>Sustainability</Link>
        <Link href="/news" style={{ fontSize: '13px', color: '#7aab88', textDecoration: 'none' }}>News</Link>

        <Link href="/contact" style={{
          fontSize: '13px',
          fontWeight: '500',
          color: '#6dc98a',
          padding: '7px 16px',
          border: '0.5px solid #2d7a4f',
          borderRadius: '2px',
          textDecoration: 'none'
        }}>
          Contact Us
        </Link>
      </div>
    </nav>
  )
}
