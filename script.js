const form = document.getElementById('studentForm');
const tableBody = document.querySelector('#studentTable tbody');

let students = JSON.parse(localStorage.getItem('students')) || [];

function renderStudents() {
  tableBody.innerHTML = '';
  students.forEach((student, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${student.name}</td>
      <td>${student.age}</td>
      <td>${student.grade}</td>
      <td>${student.duration}</td>
      <td>${student.contact}</td>
      <td>${student.email}</td>
      <td>${student.address}</td>
      <td><button class="delete-btn" onclick="deleteStudent(${index})">Delete</button></td>
    `;
    tableBody.appendChild(row);
  });
}

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const student = {
    name: document.getElementById('name').value.trim(),
    age: document.getElementById('age').value,
    grade: document.getElementById('grade').value.trim(),
    duration: document.getElementById('duration').value.trim(),
    contact: document.getElementById('contact').value.trim(),
    email: document.getElementById('email').value.trim(),
    address: document.getElementById('address').value.trim(),
  };

  students.push(student);
  localStorage.setItem('students', JSON.stringify(students));
  renderStudents();
  form.reset();
});

function deleteStudent(index) {
  students.splice(index, 1);
  localStorage.setItem('students', JSON.stringify(students));
  renderStudents();
}

// Initial render
renderStudents();
