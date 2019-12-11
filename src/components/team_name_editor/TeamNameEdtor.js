export default function teamNameEditor (name) {
    let edit = name.replace("AFC ", "").replace(" FC", "").replace("United", "Utd");
    return edit
  }