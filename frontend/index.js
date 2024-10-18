import { backend } from 'declarations/backend';

const totalBillInput = document.getElementById('total-bill');
const distributionSlider = document.getElementById('distribution');
const distributionValue = document.getElementById('distribution-value');
const fardadAmount = document.getElementById('fardad-amount');
const pierreAmount = document.getElementById('pierre-amount');

async function updateBillSplit() {
    const totalBill = parseFloat(totalBillInput.value) || 0;
    const distribution = parseFloat(distributionSlider.value);

    await backend.updateBill(totalBill);
    await backend.updateDistribution(distribution);

    const [fardadShare, pierreShare] = await backend.getBillSplit();

    fardadAmount.textContent = `$${fardadShare.toFixed(2)}`;
    pierreAmount.textContent = `$${pierreShare.toFixed(2)}`;
}

totalBillInput.addEventListener('input', updateBillSplit);
distributionSlider.addEventListener('input', () => {
    distributionValue.textContent = `${distributionSlider.value}%`;
    updateBillSplit();
});

// Initial update
updateBillSplit();
