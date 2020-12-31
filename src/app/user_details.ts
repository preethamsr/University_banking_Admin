export interface account_details

{
  Account_number:number;
  Account_type: string;
  Activationcode: string;
  Balance: number;
  DOB: Date;
  Date_of_creation: Date;
  Email_address: string;
  ID: number;
  Loan: string;
  Loan_amount: number;
  Loan_status: string;
  Name: string;
  Password: string;
  Verified: string;
}



export interface transactiondetails
{
  Transaction_ID: number;
  Account_id: number;
  To_account: string;
  Amount: number;
  Date: Date;
  Beneficiary: string;
}

export interface Loan_details
{
        LoanID: number,
        Income: number,
        Co_applicant_income: number,
        Age: number,
        Loan_amount: number,
        Other_emi: number
        Tenure:number,
        Account_ID: number,
        Status: boolean,
        Marital_status: string,
        Education: string,
        Dependents:number,
        Employment: string,
        Area: string,
        Date_of_apply:Date,
        Date_of_approval:Date,
        Gender: string,
        Credit_History:number
}

