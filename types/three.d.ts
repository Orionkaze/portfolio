/// <reference types="three" />

import { Object3DNode } from "@react-three/fiber";
import { Mesh, Group, Material, BufferGeometry } from "three";

declare module "@react-three/fiber" {
  interface ThreeElements {
    group: Object3DNode<Group, typeof Group>;
    mesh: Object3DNode<Mesh, typeof Mesh>;
  }
}

// GLB model type for the car
export interface CarGLTF {
  nodes: Record<string, Mesh>;
  materials: Record<string, Material>;
  scene: Group;
}

// Extend JSX for custom shader materials if needed
declare global {
  namespace JSX {
    interface IntrinsicElements {
      // Add custom elements here if needed
    }
  }
}
