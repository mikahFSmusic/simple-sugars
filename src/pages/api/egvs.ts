import { NextApiRequest, NextApiResponse } from 'next';

type EstimatedGlucoseValue = {
  body: {
    unit: string;
    rateUnit: string;
    egvs: [
      {
        systemTime: string;
        displayTime: string;
        value: number;
        realtimeValue: number;
        smoothedValue: number;
        status: null;
        trend: string;
        trendRate: number;
      }
    ];
  };
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<EstimatedGlucoseValue> // remove any when implementing actual response
) {
  const { unit, rateUnit, egvs } = req.body;
  res.status(200).json({
    body: {
      unit,
      rateUnit,
      egvs,
    },
  });
}
