export const Noise = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='100%'
    height='100%'
    preserveAspectRatio='none'
    className='absolute inset-0 z-1'>
    <filter id='noiseFilter'>
      <feTurbulence
        type='fractalNoise'
        baseFrequency='0.9'
        numOctaves='4'
        stitchTiles='stitch'
      />
      <feComponentTransfer>
        <feFuncR type='discrete' tableValues='1 1' />
        <feFuncG type='discrete' tableValues='1 1' />
        <feFuncB type='discrete' tableValues='1 1' />
      </feComponentTransfer>
    </filter>

    <rect
      width='100%'
      height='100%'
      filter='url(#noiseFilter)'
      opacity='0.20'
    />
  </svg>
);

export const NoiseLight = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='100%'
    height='100%'
    preserveAspectRatio='none'
    className='absolute inset-0 z-1'>
    <filter id='noiseFilter'>
      <feTurbulence
        type='fractalNoise'
        baseFrequency='0.9'
        numOctaves='4'
        stitchTiles='stitch'
      />
      <feComponentTransfer>
        <feFuncR type='discrete' tableValues='0 0' />
        <feFuncG type='discrete' tableValues='0 0' />
        <feFuncB type='discrete' tableValues='0 0' />
      </feComponentTransfer>
    </filter>

    <rect
      width='100%'
      height='100%'
      filter='url(#noiseFilter)'
      opacity='0.25'
    />
  </svg>
);
