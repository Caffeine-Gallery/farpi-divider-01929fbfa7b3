import Float "mo:base/Float";

actor BillSplitter {
    stable var totalBill : Float = 0.0;
    stable var distribution : Float = 50.0; // Percentage for Fardad Aj (0-100)

    public func updateBill(amount : Float) : async () {
        totalBill := amount;
    };

    public func updateDistribution(percentage : Float) : async () {
        distribution := percentage;
    };

    public query func getBillSplit() : async (Float, Float) {
        let fardadShare = totalBill * (distribution / 100.0);
        let pierreShare = totalBill - fardadShare;
        (fardadShare, pierreShare)
    };
}
