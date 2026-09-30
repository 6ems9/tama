# Earth Textures Directory

Place your high-resolution Earth textures in this directory:

- `day.jpg` / `day.png` - Daytime surface texture (equirectangular 2:1 projection)
- `night.jpg` / `night.png` - Night city lights texture
- `clouds.jpg` / `clouds.png` - Atmospheric cloud layer with transparency or alpha mask
- `normal.jpg` / `normal.png` - Topographical normal map for relief rendering

By default, the 3D Solar System automatically generates high-fidelity procedural canvas textures with zero network delay and zero missing asset warnings. When you drop custom texture files into this directory, they can be directly referenced by `components/universe/Earth.tsx`.
