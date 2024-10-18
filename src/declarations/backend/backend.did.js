export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'getBillSplit' : IDL.Func([], [IDL.Float64, IDL.Float64], ['query']),
    'updateBill' : IDL.Func([IDL.Float64], [], []),
    'updateDistribution' : IDL.Func([IDL.Float64], [], []),
  });
};
export const init = ({ IDL }) => { return []; };
