
            // Bookingform Part Ticket Count
function CountDisplay(IncrementDecrement, TicketType) {
    const CountOutput = GetId(TicketType);
    let Output = parseInt(CountOutput.value);
    if (IncrementDecrement == true) {
        Output = Output + 1;
        CountOutput.value = Output;
        DisplayPrizeCalculation();
    }
    else if (IncrementDecrement == false) {
        if (Output > 0) {
            Output = Output - 1;
            CountOutput.value = Output;
            DisplayPrizeCalculation();
        }
    }
}
            // DisplayPrize
function DisplayPrizeCalculation() {
    const SubTotal = GetId('Subtotal')
    const VAT = GetId('Vat')
    const Total = GetId('Total');
    let FirstclassTicket = parseInt(GetId('FirstclassCount').value) * 150;
    let Economy = parseInt(GetId('EconomyCount').value) * 100;
    SubTotal.innerText = FirstclassTicket + Economy;
    VAT.innerText = parseInt(SubTotal.innerText) * 0.10;
    Total.innerText = parseInt(VAT.innerText) + parseInt(SubTotal.innerText);
}


        // Bookingdescription Part
const Bookingdescription = GetId('Bookingdescription');
const Bookingform = GetId('Bookingform');
const BokingButton = GetId('Booking');
BokingButton.addEventListener('click', function () {
    Bookingform.style.display = 'none';
    Bookingdescription.style.display = 'block';
    DescriptionPropertys("DepartureInput", "Departure");
    DescriptionPropertys("ReturnInput", "Return");
    DescriptionPropertys("Toinput", "To");
    DescriptionPropertys('FromInput', 'From');
    DescriptionPropertys('FirstclassCount', 'FirstClassOutput');
    DescriptionPropertys('EconomyCount', 'EconomyOutput');
    DescriptionPropertys('Total', 'TotalCost');
})

            // Bookingdescription All PropertysDisplay
function DescriptionPropertys(InputId, OutputId) {
    if (InputId == 'Total') {
        let DesplayId = GetId(OutputId);
        return DesplayId.innerText = GetId(InputId).innerText;

    }
    else {
        let DesplayId = GetId(OutputId);
        return DesplayId.innerText = GetId(InputId).value;
    }
}

            // GetAllId
function GetId(id) {
    return document.getElementById(id);
}