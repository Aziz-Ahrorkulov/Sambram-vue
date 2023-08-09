<template>
  <section class="vh-100 gradient-custom">
    <div class="container py-5 h-100">
      <div class="row justify-content-center align-items-center h-100">
        <div class="col-12 col-lg-9 col-xl-7 box-shadow-custom overflow-hidden">
          <div class="card shadow-2-strong card-registration rounded-15">
            <div class="card-body p-4 p-md-5">
              <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Application Form</h3>

              <form @submit.prevent="submitApplication">

                <div class="form-group">
                  <label for="first_name">Имя:</label>
                  <input type="text" id="first_name" class="form-control" v-model="form.first_name" required>
                </div>

                <div class="form-group">
                  <label for="last_name">Фамилия:</label>
                  <input type="text" id="last_name" class="form-control" v-model="form.last_name" required>
                </div>

                <div class="form-group">
                  <label for="phone_number">Телефон:</label>
                  <input type="tel" id="phone_number" class="form-control" v-model="form.phone_number" required>
                </div>

                <div class="form-group">
                  <label for="birth_date">Дата рождения:</label>
                  <input type="date" id="birth_date" class="form-control" v-model="form.birth_date" required>
                </div> <br>

                <div class="form-group">
                  <label for="cv">Загрузить резюме (CV): &nbsp;</label>
                  <input type="file" id="cv" class="form-control" @change="updateCv">
                  <label class="file-label" for="cv">{{ form.cv ? form.cv.name : 'Выберите файл' }}</label>
                </div>

                <div class="form-group">
                  <label for="gender">Пол:</label>
                  <select id="gender" class="form-control" v-model="form.gender" required>
                    <option value="">Выберите пол</option>
                    <option value="M">Мужской</option>
                    <option value="F">Женский</option>
                  </select>
                </div>

                <div class="form-group">
                  <label for="job">Выберите работу:</label>
                  <select id="job" class="form-control" v-model="form.job">
                    <option value="">Выберите работу</option>
                    <option v-for="job in jobs" :key="job.id" :value="job.id">{{ job.title }}</option>
                  </select>
                </div> <br>

                <div class="form-group">
                  <button type="submit" class="btn btn-primary">Отправить заявку</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<!-- Existing <script> and <style> sections remain unchanged -->


<script>
import axios from 'axios';

export default {
  name: 'ApplicationView',
  data() {
    return {
      form: {
        first_name: '',
        last_name: '',
        phone_number: '', // Uncomment the phone_number field
        birth_date: '', // Uncomment the birth_date field
        cv: null, // Uncomment the cv field
        gender: '',
        job: '', // Add the job field
      },
      jobs: [], // To store the list of available jobs
    };
  },
  methods: {
    fetchJobs() {
      axios.get('http://127.0.0.1:8000/api/jobs/') // Replace with the correct API endpoint for fetching jobs
        .then(response => {
          this.jobs = response.data;
        })
        .catch(error => {
          console.error('Ошибка при получении списка работ:', error);
        });
    },
    updateCv(event) {
      this.form.cv = event.target.files[0];
    },
    submitApplication() {
      const formData = new FormData();

      formData.append('first_name', this.form.first_name);
      formData.append('last_name', this.form.last_name);
      formData.append('gender', this.form.gender);

      if (this.form.phone_number) {
        formData.append('phone_number', this.form.phone_number);
      }

      if (this.form.birth_date) {
        formData.append('birth_date', this.form.birth_date);
      }

      if (this.form.cv) {
        formData.append('cv', this.form.cv);
      }

      // Append the selected job ID to the formData
      if (this.form.job) {
        formData.append('job', this.form.job);
      }

      axios.post('http://127.0.0.1:8000/api/applications/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
        .then(response => {
          console.log(response.data);
          this.form.first_name = '';
          this.form.last_name = '';
          this.form.phone_number = '';
          this.form.birth_date = '';
          this.form.cv = null;
          this.form.gender = '';
          this.form.job = ''; // Reset the job field after submission
        })
        .catch(error => {
          console.error('Ошибка при отправке данных:', error);
        });
    },
  },
  created() {
    this.fetchJobs();
  },
};
</script>






<style>
.card-registration .select-input.form-control[readonly]:not([disabled]) {
  font-size: 1rem;
  line-height: 2.15;
  padding-left: .75em;
  padding-right: .75em;
}

.card-registration .select-arrow {
  top: 13px;
}

input[type="file"] {
  /* Hide the default file input appearance */
  position: absolute;
  clip: rect(0, 0, 0, 0);
  pointer-events: none;
}

.file-label {
  background-color: #3b71ca;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
}

.col-11 {
  display: flex;
  justify-content: space-between;
}
</style>