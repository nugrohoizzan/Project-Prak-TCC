document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const tableBuku = document.getElementById("table-buku");
  
    const getBuku = async () => {
      try {
        const response = await axios.get("https://buku-pfdn5f76pq-et.a.run.app/buku");
        tableBuku.innerHTML = "";
        response.data.data.forEach((buku) => {
          const tr = document.createElement("tr");
          tr.innerHTML = `
            <td>${buku.id}</td>
            <td>${buku.nama}</td>
            <td>${buku.kode_buku}</td>
            <td><button onclick="editBuku(${buku.id})">Edit</button></td>
            <td><button onclick="deleteBuku(${buku.id})">Delete</button></td>
          `;
          tableBuku.appendChild(tr);
        });
      } catch (error) {
        console.error("Error fetching buku:", error);
      }
    };
  
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const nama = document.getElementById("nama").value;
      const kodeBuku = document.getElementById("kode_buku").value;
      const id = form.getAttribute("data-id");
  
      try {
        if (id) {
          await axios.put(`https://buku-pfdn5f76pq-et.a.run.app/buku/${id}`, { nama, kode_buku: kodeBuku });
        } else {
          await axios.post("https://buku-pfdn5f76pq-et.a.run.app/buku", { nama, kode_buku: kodeBuku });
        }
        form.reset();
        form.removeAttribute("data-id");
        getBuku();
      } catch (error) {
        console.error("Error saving buku:", error);
      }
    });
  
    window.editBuku = async (id) => {
      try {
        const response = await axios.get(`https://buku-pfdn5f76pq-et.a.run.app/buku/${id}`);
        document.getElementById("nama").value = response.data.data.nama;
        document.getElementById("kode_buku").value = response.data.data.kode_buku;
        form.setAttribute("data-id", id);
      } catch (error) {
        console.error("Error fetching buku:", error);
      }
    };
  
    window.deleteBuku = async (id) => {
      try {
        await axios.delete(`https://buku-pfdn5f76pq-et.a.run.app/buku/${id}`);
        getBuku();
      } catch (error) {
        console.error("Error deleting buku:", error);
      }
    };
  
    getBuku();
  });
  