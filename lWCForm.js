import { LightningElement,api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import student from '@salesforce/schema/Student__c';


export default class LWCForm extends LightningElement {
    objectApiName =student

    handleSuccess(event) {
        const toastEvent = new ShowToastEvent({
            title: "Student Record Created",
            message: "Record ID: "  + event.detail.id,
            variant: "success"
        });
        this.dispatchEvent(toastEvent);
    }
    handleRecordSave() {
        this.template.querySelector('lightning-record-edit-form').submit(this.fields);
      }
    @api recordId;
    @api objectApiName;

}