// Connect the page to your Jotform form.
// 1. formId: the number at the end of your form's link, e.g. jotform.com/form/241234567890123
// 2. fields: each question's "Unique Name" in Jotform, written as q<number>_<name>.
//    Find it in the Jotform builder: click a question > gear icon > Advanced > Field Details.
//    The question number is in the "Question ID" there. Example: Question ID 3, Unique Name "whichDate" -> "q3_whichDate".
window.JOTFORM = {
  formId: "PASTE_FORM_ID",
  fields: {
    date:  "q3_whichDate",   // Single choice: "Picnic & board games" / "Paint & sip"
    time:  "q4_bestTime",    // Single choice: "Afternoon" / "Evening"
    extra: "q5_extra",       // Short text: snack, game, or playlist song
    note:  "q6_anythingElse" // Long text
  }
};
