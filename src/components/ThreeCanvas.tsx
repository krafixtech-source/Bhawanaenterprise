import React, { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Edges } from '@react-three/drei'
import * as THREE from 'three'

// Inner component to access hooks like useFrame
const AbstractHouse: React.FC<{ scrollProgress: number; mouse: { x: number; y: number } }> = ({
  scrollProgress,
  mouse,
}) => {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (!groupRef.current) return

    // Base continuous rotation
    groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.05 + scrollProgress * 1.5
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, mouse.y * 0.1, 0.1)
    
    // Scale and position based on scroll progress
    const targetScale = 1 - scrollProgress * 0.4
    groupRef.current.scale.setScalar(THREE.MathUtils.lerp(groupRef.current.scale.x, targetScale, 0.1))

    const targetY = -scrollProgress * 2
    groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetY, 0.1)
  })

  return (
    <group ref={groupRef}>
      {/* Foundation slab */}
      <mesh position={[0, -0.8, 0]}>
        <boxGeometry args={[3.2, 0.1, 2.2]} />
        <meshStandardMaterial color="#222222" roughness={0.9} />
        <Edges color="#d4af37" threshold={15} />
      </mesh>

      {/* Main Ground Floor Structure (Translucent Glass-like) */}
      <mesh position={[-0.4, -0.35, 0]}>
        <boxGeometry args={[1.8, 0.8, 1.8]} />
        <meshStandardMaterial
          color="#d4af37"
          transparent
          opacity={0.12}
          roughness={0.1}
          metalness={0.9}
        />
        <Edges color="#ffffff" threshold={15} />
      </mesh>

      {/* Second Floor Cantilever Slab */}
      <mesh position={[0.4, 0.1, 0]}>
        <boxGeometry args={[2.0, 0.1, 2.0]} />
        <meshStandardMaterial color="#111111" roughness={0.9} />
        <Edges color="#d4af37" threshold={15} />
      </mesh>

      {/* Second Floor Bedroom Block */}
      <mesh position={[0.4, 0.5, 0]}>
        <boxGeometry args={[1.6, 0.7, 1.6]} />
        <meshStandardMaterial
          color="#d4af37"
          transparent
          opacity={0.05}
          roughness={0.2}
          metalness={0.5}
        />
        <Edges color="#ffffff" threshold={15} />
      </mesh>

      {/* Decorative vertical columns / posts */}
      <mesh position={[-1.3, -0.35, 0.9]}>
        <cylinderGeometry args={[0.02, 0.02, 0.8]} />
        <meshStandardMaterial color="#d4af37" />
      </mesh>
      <mesh position={[-1.3, -0.35, -0.9]}>
        <cylinderGeometry args={[0.02, 0.02, 0.8]} />
        <meshStandardMaterial color="#d4af37" />
      </mesh>
      <mesh position={[1.3, -0.35, 0.9]}>
        <cylinderGeometry args={[0.02, 0.02, 0.8]} />
        <meshStandardMaterial color="#d4af37" />
      </mesh>
      <mesh position={[1.3, -0.35, -0.9]}>
        <cylinderGeometry args={[0.02, 0.02, 0.8]} />
        <meshStandardMaterial color="#d4af37" />
      </mesh>
    </group>
  )
}

export const ThreeCanvas: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      if (totalHeight <= 0) return
      setScrollProgress(window.scrollY / totalHeight)
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('mousemove', handleMouseMove, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  // Completely unmount the canvas when it is scrolled out of the viewport
  if (scrollProgress > 0.5) return null

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-20">
      <Canvas camera={{ position: [0, 1.5, 4.5], fov: 45 }} dpr={[1, 1.5]}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[5, 10, 5]} intensity={2.0} color="#ffffff" />
        <directionalLight position={[-5, 5, -5]} intensity={0.8} color="#d4af37" />
        
        <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.4}>
          <AbstractHouse scrollProgress={scrollProgress} mouse={mouse} />
        </Float>
      </Canvas>
    </div>
  )
}
export default ThreeCanvas
