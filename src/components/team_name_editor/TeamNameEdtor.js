export default function teamNameEditor (name) {
    let firstEdit = name.replace("AFC ", "");
    let secondEdit = firstEdit.replace(" FC", "");
    let thirdEdit = secondEdit.replace("United", "Utd");
    return thirdEdit;
  }