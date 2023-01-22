class launch {
  constructor(name = "Generic", value = 0) {
    this.name = name;
    this.value = value;
  }
}

class financialCycle {
  constructor(month, year) {
    this.month = month;
    this.year = year;
    this.releases = [];
  }

  setReleases(...releases) {
    releases.forEach((l) => this.releases.push(l));
  }
  summary() {
    let consolidatedValue = 0;
    this.releases.forEach((l) => {
      consolidatedValue += l.value;
    });
    return consolidatedValue;
  }
}

const wage = new launch("wage", 1200);
const electricityBill = new launch("electricityBill", -200);

const bills = new financialCycle(2, 2021);

bills.setReleases(wage, electricityBill);
console.log(bills.summary());
