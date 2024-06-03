document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const tablePengunjung = document.getElementById("table-pengunjung");
  
    const getPengunjung = async () => {
      try {
        const response = await axios.get("https://pengunjung-pfdn5f76pq-et.a.run.app/pengunjung");
        tablePengunjung.innerHTML = "";
        response.data.data.forEach((pengunjung) => {
          const tr = document.createElement("tr");
          tr.innerHTML = `
            <td>${pengunjung.id}</td>
            <td>${pengunjung.nama}</td>
            <td>${pengunjung.kode_induk}</td>
            <td><button onclick="editPengunjung(${pengunjung.id})">Edit</button></td>
            <td><button onclick="deletePengunjung(${pengunjung.id})">Delete</button></td>
          `;
          tablePengunjung.appendChild(tr);
        });
      } catch (error) {
        console.error("Error fetching pengunjung:", error);
      }
    };
  
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const nama = document.getElementById("nama").value;
      const kodeInduk = document.getElementById("kode_induk").value;
      const id = form.getAttribute("data-id");
  
      try {
        if (id) {
          await axios.put(`https://pengunjung-pfdn5f76pq-et.a.run.app/pengunjung/${id}`, { nama, kode_induk: kodeInduk });
        } else {
          await axios.post("https://pengunjung-pfdn5f76pq-et.a.run.app/pengunjung", { nama, kode_induk: kodeInduk });
        }
        form.reset();
        form.removeAttribute("data-id");
        getPengunjung();
      } catch (error) {
        console.error("Error saving pengunjung:", error);
      }
    });
  
    window.editPengunjung = async (id) => {
      try {
        const response = await axios.get(`https://pengunjung-pfdn5f76pq-et.a.run.app/pengunjung/${id}`);
        document.getElementById("nama").value = response.data.data.nama;
        document.getElementById("kode_induk").value = response.data.data.kode_induk;
        form.setAttribute("data-id", id);
      } catch (error) {
        console.error("Error fetching pengunjung:", error);
      }
    };
  
    window.deletePengunjung = async (id) => {
      try {
        await axios.delete(`https://pengunjung-pfdn5f76pq-et.a.run.app/pengunjung/${id}`);
        getPengunjung();
      } catch (error) {
        console.error("Error deleting pengunjung:", error);
      }
    };
  
    getPengunjung();
  });