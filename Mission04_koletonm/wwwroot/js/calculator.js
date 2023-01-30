$("#btnSend").click(function () {
    
    // Gather the values 
    var assignments = parseFloat($("#assignments").val());
    var group = parseFloat($("#group").val());
    var quizzes = parseFloat($("#quizzes").val());
    var midterm = parseFloat($("#midterm").val());
    var final = parseFloat($("#final").val());
    var intex = parseFloat($("#intex").val());

    // Initialize the percent and letter variables
    var percentGrade = parseFloat(0);
    var letterGrade = "";

    // Calcualte the percent grade based on percentages found in IS 413 syllabus
    assignments = assignments * .50;
    group = group * .10;
    quizzes = quizzes * .10;
    midterm = midterm * .10;
    final = final * .10;
    intex = intex * .10;

    percentGrade = (assignments + group + quizzes + midterm + final + intex).toFixed(2);

    // Based on percent grade determine the letter grade
    if (percentGrade >= 94) {
        letterGrade = "A";
    } else if (percentGrade >= 90) {
        letterGrade = "A-";
    } else if (percentGrade >= 87) {
        letterGrade = "B+";
    } else if (percentGrade >= 84) {
        letterGrade = "B";
    } else if (percentGrade >= 80) {
        letterGrade = "B-";
    } else if (percentGrade >= 77) {
        letterGrade = "C+";
    } else if (percentGrade >= 74) {
        letterGrade = "C";
    } else if (percentGrade >= 70) {
        letterGrade = "C-";
    } else if (percentGrade >= 67) {
        letterGrade = "D+";
    } else if (percentGrade >= 64) {
        letterGrade = "D";
    } else if (percentGrade >= 60) {
        letterGrade = "D-";
    } else {
        letterGrade = "E";
    }

    $("#percentGrade").text(percentGrade.toString());
    $("#letterGrade").text(letterGrade);
})