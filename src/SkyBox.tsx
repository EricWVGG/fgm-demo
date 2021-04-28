import { useThree } from '@react-three/fiber'
import { useCubeTexture } from '@react-three/drei'
import { sRGBEncoding } from 'three'

const SkyBox = () => {
  const { scene } = useThree()
  const envMap = useCubeTexture([
    "fgm_sq2.jpg",
    "fgm_sq2.jpg",
    "fgm_sq2.jpg",
    "fgm_sq2.jpg",
    "fgm_sq2.jpg",
    "fgm_sq2.jpg",
  ], { path: '/' })  
  envMap.encoding = sRGBEncoding
  
  scene.background = envMap    
  return null
}

export default SkyBox


useCubeTexture.preload([
  "fgm_sq2.jpg",
  "fgm_sq2.jpg",
  "fgm_sq2.jpg",
  "fgm_sq2.jpg",
  "fgm_sq2.jpg",
  "fgm_sq2.jpg",
], { path: '/' })
