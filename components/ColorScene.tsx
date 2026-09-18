"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ColorScene() {
  const host = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const container = host.current;
    if (!container) return;
    let renderer: THREE.WebGLRenderer;
    try { renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "low-power" }); }
    catch { return; }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
    camera.position.z = 15;
    scene.add(new THREE.AmbientLight(0xffffff, 2.1));
    const light = new THREE.DirectionalLight(0xffffff, 4);
    light.position.set(-3, 5, 7); scene.add(light);
    const pink = new THREE.PointLight(0xf9a1cf, 25); pink.position.set(4, -2, 4); scene.add(pink);
    const group = new THREE.Group(); scene.add(group);
    const colors = ["#ffb739", "#63bd98", "#ef8567"];
    const geometries: THREE.BufferGeometry[] = [];
    const materials: THREE.Material[] = [];
    const mesh = (geometry: THREE.BufferGeometry, color: string) => {
      const material = new THREE.MeshStandardMaterial({ color, roughness: 0.3, metalness: 0.05 });
      geometries.push(geometry); materials.push(material); return new THREE.Mesh(geometry, material);
    };
    const objects: THREE.Group[] = [];
    colors.forEach((color, i) => {
      const pencil = new THREE.Group();
      const body = mesh(new THREE.CylinderGeometry(0.17, 0.17, 2.25, 6), color);
      pencil.add(body);
      const wood = mesh(new THREE.ConeGeometry(0.17, 0.5, 6), "#f1d1ac"); wood.position.y = 1.37; pencil.add(wood);
      const tip = mesh(new THREE.ConeGeometry(0.065, 0.2, 6), color); tip.position.y = 1.58; pencil.add(tip);
      const end = mesh(new THREE.CylinderGeometry(0.175, 0.175, 0.16, 6), color); end.position.y = -1.18; pencil.add(end);
      const positions = [[2.6, 1.8, -0.3], [-2.55, -0.6, 0.25], [2.5, -1.7, -0.45]];
      const rotations = [-0.32, 0.28, -0.32];
      pencil.position.set(...positions[i] as [number, number, number]);
      pencil.rotation.set(0.12, 0.3, rotations[i]);
      pencil.userData.baseY = pencil.position.y;
      group.add(pencil); objects.push(pencil);
    });
    let pointerX = 0, pointerY = 0, visible = true;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const draw = (time = 0) => {
      if (!reducedMotion.matches) {
        group.rotation.y += (pointerX * 0.12 - group.rotation.y) * 0.04;
        group.rotation.x += (-pointerY * 0.09 - group.rotation.x) * 0.04;
        objects.forEach((object, i) => { object.position.y = object.userData.baseY + Math.sin(time * 0.0006 + i) * 0.09; });
      }
      renderer.render(scene, camera);
    };
    const updateLoop = () => { renderer.setAnimationLoop(visible && !document.hidden && !reducedMotion.matches ? draw : null); draw(); };
    const resize = () => { const { width, height } = container.getBoundingClientRect(); renderer.setSize(width, height); camera.aspect = width / height; camera.position.z = Math.max(15, 4 / (Math.tan(THREE.MathUtils.degToRad(17.5)) * camera.aspect)); camera.updateProjectionMatrix(); draw(); };
    const observer = new ResizeObserver(resize); observer.observe(container);
    const intersection = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; updateLoop(); }); intersection.observe(container);
    const move = (event: PointerEvent) => { const rect = container.getBoundingClientRect(); pointerX = (event.clientX - rect.left) / rect.width * 2 - 1; pointerY = (event.clientY - rect.top) / rect.height * 2 - 1; };
    container.addEventListener("pointermove", move);
    document.addEventListener("visibilitychange", updateLoop);
    reducedMotion.addEventListener("change", updateLoop);
    resize(); updateLoop();
    return () => { renderer.setAnimationLoop(null); observer.disconnect(); intersection.disconnect(); container.removeEventListener("pointermove", move); document.removeEventListener("visibilitychange", updateLoop); reducedMotion.removeEventListener("change", updateLoop); geometries.forEach(g => g.dispose()); materials.forEach(m => m.dispose()); renderer.dispose(); renderer.domElement.remove(); };
  }, []);
  return <div ref={host} className="color-scene" aria-hidden="true" />;
}
