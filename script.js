document.getElementById('timetableForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const subject = document.getElementById('subject').value;
    const day = document.getElementById('day').value;
    const startTime = document.getElementById('startTime').value;
    const endTime = document.getElementById('endTime').value;
  
    const table = document.querySelector('#timetable tbody');
    const newRow = table.insertRow();
  
    newRow.innerHTML = `
      <td>${subject}</td>
      <td>${day}</td>
      <td>${startTime}</td>
      <td>${endTime}</td>
      <td><button class="delete-btn">Delete</button></td>
    `;
  
    newRow.querySelector('.delete-btn').addEventListener('click', () => {
      newRow.remove();
    });
  
    document.getElementById('timetableForm').reset();
  });