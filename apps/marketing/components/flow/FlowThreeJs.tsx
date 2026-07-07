'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function FlowThreeJs() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;
    
    // Check if there is already a canvas to prevent hot-reload duplicates
    if (container.children.length > 0) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const innerGeom = new THREE.IcosahedronGeometry(1.2, 5);
    const innerMat = new THREE.MeshPhongMaterial({
        color: 0x00E5FF,
        emissive: 0x00E5FF,
        emissiveIntensity: 0.5,
        wireframe: true,
        transparent: true,
        opacity: 0.3
    });
    const innerCore = new THREE.Mesh(innerGeom, innerMat);
    group.add(innerCore);

    const outerGeom = new THREE.IcosahedronGeometry(2, 2);
    const outerMat = new THREE.MeshPhongMaterial({
        color: 0x7B61FF,
        wireframe: true,
        transparent: true,
        opacity: 0.1
    });
    const outerShell = new THREE.Mesh(outerGeom, outerMat);
    group.add(outerShell);

    const nodeGeom = new THREE.SphereGeometry(0.05, 16, 16);
    const nodeMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    for (let i = 0; i < 20; i++) {
        const node = new THREE.Mesh(nodeGeom, nodeMat);
        const angle = Math.random() * Math.PI * 2;
        const radius = 2.5 + Math.random() * 1.5;
        node.position.set(
            Math.cos(angle) * radius,
            (Math.random() - 0.5) * 4,
            Math.sin(angle) * radius
        );
        group.add(node);
    }

    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(5, 5, 5);
    scene.add(light);

    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    camera.position.z = 6;

    let animationId: number;

    function animate() {
        animationId = requestAnimationFrame(animate);
        const time = Date.now() * 0.001;
        
        group.rotation.y += 0.002;
        innerCore.rotation.x -= 0.003;
        innerCore.scale.setScalar(1 + Math.sin(time) * 0.05);
        
        outerShell.rotation.z += 0.001;
        
        renderer.render(scene, camera);
    }

    const handleResize = () => {
        const w = container.clientWidth || window.innerWidth;
        const h = container.clientHeight || window.innerHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      if (container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 w-full h-full" />;
}
