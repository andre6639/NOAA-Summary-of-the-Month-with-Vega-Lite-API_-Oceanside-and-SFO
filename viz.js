import vl from 'vega-lite-api';

const nullVal = '0';

export const viz = vl
	.markCircle({
    size: 50, 
    opacity: .45,
  })
  .encode(
    vl.x().fieldT('DATE'),
    vl.y().fieldQ('AverageTemperature').scale({ zero: false }),
//    vl.color().fieldN('NAME'),
    vl.color().fieldQ('AverageTemperature'),
    vl.tooltip().fieldN('AverageTemperature'),
  );

// .scale({ zero: false }),