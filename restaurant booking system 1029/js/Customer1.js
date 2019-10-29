class Customer{
    fname = "";
    lname = "";
    visitingDate = "";
    visitingTime = "";
    tableType = "";
    telNum = "";
    email = "";
    note = "";

    constructor(fname, lname, visitingDate, visitingTime, tableType, telNum, email, note){
        this.fname = fname;
        this.lname = lname;
        this.visitingDate = visitingDate;
        this.visitingTime = visitingTime;
        this.tableType = tableType;
        this.telNum = telNum;
        this.email = email;
        this.note = note;
    }


    toString() {
        return`
            <li>
                First Name: ${this.fname}
                <br>
                Last Name: ${this.lname}
                <br>
                Visiting Date: ${this.visitingDate}
                <br>
                Visiting Time: ${this.visitingTime}
                <br>
                Table Type: ${this.tableType}
                <br>
                Telephone Number: ${this.telNum}
                <br>
                Email Adress: ${this.email}
                <br>
                Note: ${this.note}
            </li>
        `;
    }
}

