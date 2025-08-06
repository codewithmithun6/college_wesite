document.getElementById("admissionForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Your application has been submitted successfully!");
    this.reset();
});
