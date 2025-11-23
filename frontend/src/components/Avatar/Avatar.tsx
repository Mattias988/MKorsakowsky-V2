'use client';

import React, { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, useAnimations, OrbitControls, Environment } from '@react-three/drei';
import { Group } from 'three';

// Zmień tę ścieżkę na nazwę swojego pliku w folderze public
const MODEL_PATH = '/avatar.glb';

const Model = () => {
    const group = useRef<Group>(null);
    const { scene, animations } = useGLTF(MODEL_PATH);
    const { actions, names } = useAnimations(animations, group);

    useEffect(() => {
        // Automatyczne odtwarzanie pierwszej znalezionej animacji
        if (names.length > 0) {
            actions[names[0]]?.reset().fadeIn(0.5).play();
        }
    }, [actions, names]);

    return (
        <group ref={group} dispose={null}>
            {/* Dostosuj pozycję (y) i skalę, aby model pasował do kadru */}
            <primitive object={scene} position={[0, -1.5, 0]} scale={1.8} />
        </group>
    );
};

export default function Avatar3D() {
    return (
        // Canvas musi mieć styl width/height: 100%, żeby wypełnić kontener rodzica
        <div style={{ width: '100%', height: '100%' }}>
            <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
                {/* Oświetlenie */}
                <ambientLight intensity={0.6} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
                <Environment preset="city" /> {/* Dodaje ładne odbicia */}

                <Model />

                {/* Pozwala użytkownikowi lekko obracać model, ale blokuje zoom */}
                <OrbitControls enableZoom={false} enablePan={false} />
            </Canvas>
        </div>
    );
}

// Preload modelu dla lepszej wydajności
useGLTF.preload(MODEL_PATH);