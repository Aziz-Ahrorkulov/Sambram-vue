<template>
  <div id="wrapper">
    <!-- Sidebar -->
    <ul
      class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <!-- Sidebar - Brand -->
      <a
        class="sidebar-brand d-flex align-items-center justify-content-center"
        href="{% url 'dashboard-index' %}"
      >
        <div class="sidebar-brand-icon rotate-n-15">
          <i class="fas fa-laugh-wink"></i>
        </div>
        <div class="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
      </a>

      <!-- Divider -->
      <hr class="sidebar-divider my-0" />

      <!-- Nav Item - Dashboard -->
      <li class="nav-item active">
        <a class="nav-link" href="{% url 'dashboard-index' %}   ">
          <i class="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span></a
        >
      </li>

      <!-- Divider -->
      <hr class="sidebar-divider" />

      <!-- Heading -->

      <!-- Nav Item - Pages Collapse Menu -->
      <li class="nav-item">
        <RouterLink
          to="/application-list"
          class="nav-link collapsed"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <i class="fas fa-fw fa-cog"></i>
          <span>Components</span>
        </RouterLink>
      </li>

      <!-- Divider -->
      <hr class="sidebar-divider d-none d-md-block" />

      <!-- Sidebar Toggler (Sidebar)
      <div class="text-center d-none d-md-inline">
        <button class="rounded-circle border-0" id="sidebarToggle"></button>
      </div> -->
    </ul>
    <!-- End of Sidebar -->

    <div id="content-wrapper" class="d-flex flex-column">
      <!-- Main Content -->
      <div id="content">
        <!-- Topbar -->
        <nav
          class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow"
        >
          <!-- Sidebar Toggle (Topbar) -->
          <button
            id="sidebarToggleTop"
            class="btn btn-link d-md-none rounded-circle mr-3"
          >
            <i class="fa fa-bars"></i>
          </button>

          <!-- Topbar Search -->

          <!-- Topbar Navbar -->
          <ul class="navbar-nav ml-auto">
            <!-- Nav Item - Search Dropdown (Visible Only XS) -->
            <li class="nav-item dropdown no-arrow d-sm-none">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="searchDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="fas fa-search fa-fw"></i>
              </a>
              <!-- Dropdown - Messages -->
              <div
                class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                aria-labelledby="searchDropdown"
              >
                <form class="form-inline mr-auto w-100 navbar-search">
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control bg-light border-0 small"
                      placeholder="Search for..."
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                    />
                    <div class="input-group-append">
                      <button class="btn btn-primary" type="button">
                        <i class="fas fa-search fa-sm"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </li>

            <!-- Nav Item - Alerts -->

            <!-- Nav Item - User Information -->
            <li class="nav-item dropdown no-arrow">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="userDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span class="mr-2 d-none d-lg-inline text-gray-600 small"
                  >Douglas McGee</span
                >
                <img class="img-profile rounded-circle" src="img/undraw_profile.svg" />
              </a>
              <!-- Dropdown - User Information -->
            </li>
          </ul>
        </nav>
        <!-- End of Topbar -->

        <!-- Begin Page Content -->
        <div class="container-fluid">
          <!-- Page Heading -->
          <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
          </div>

          <!-- Content Row -->
          <div class="row">
            <div class="wrapper">
              <div class="container">
                <div class="filter">
                  <div class="row">
                    <div class="col-sm-4">
                      <div class="show-row">
                        <select class="form-control">
                          <option value="5" selected="selected">5</option>
                          <option value="10">10</option>
                          <option value="15">15</option>
                          <option value="20">20</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <table id="music" class="table table-responsive table-hover">
                  <thead>
                    <tr class="myHead">
                      <th>ID</th>
                      <th>Ism</th>
                      <th>Familiya</th>
                      <th>Telefon raqam</th>
                      <th>Tug'ilgan kun</th>
                      <th>Jins</th>
                      <th>Rezume</th>
                      <th>Qabul qilish / Rad etish</th>
                    </tr>
                  </thead>
                  <tbody>
                    <template v-if="filteredApplications.length > 0">
                      <!-- Use v-for to loop through the applications array and display the data -->
                      <tr
                        v-for="application in filteredApplications"
                        :key="application.id"
                      >
                        <td>{{ application.id }}</td>
                        <td>
                          <div class="thumb">
                            <strong>{{ application.first_name }}</strong>
                          </div>
                        </td>
                        <td>
                          <div class="thumb">
                            <strong>{{ application.last_name }}</strong>
                          </div>
                        </td>
                        <td>
                          {{ application.phone_number }}
                        </td>
                        <td>{{ application.birth_date }}</td>
                        <td>{{ application.gender }}</td>
                        <td><a href="#">Download Resume</a></td>
                        <td>
                          <a href="#" @click="applyToNextManager(application.id)"
                            >Apply</a
                          >

                          <a
                            href="#"
                            class="btn btn-secondary"
                            style="background-color: rgb(216, 23, 23)"
                            >&#10006;</a
                          >
                        </td>
                      </tr>
                    </template>
                    <tr v-else>
                      <td colspan="8">Заявки отсутствуют</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  name: "DashboardView",
  data() {
    return {
      userRole: null,
      applications: [],
    };
  },
  computed: {
    ...mapGetters(["getUserRole"]),
    filteredApplications() {
      if (!this.applications || this.applications.length === 0) {
        return [];
      }

      return this.applications.filter((application) => {
        const { first_validation, second_validation } = application;

        if (this.userRole === 2) {
          return !first_validation && !second_validation;
        } else if (this.userRole === 3) {
          return first_validation && !second_validation;
        } else if (this.userRole === 4) {
          return first_validation && second_validation;
        } else {
          return first_validation && second_validation;
        }
      }).map((application) => {
        // Обработка значений null
        return {
          ...application,
          phone_number: application.phone_number || "No phone number",
          birth_date: application.birth_date || "No birth date",
          // Добавьте обработку других полей по аналогии
        };
      });
    },
  },
  methods: {
    fetchUserAndApplications() {
      axios
        .get("http://127.0.0.1:8000/api/applications/")
        
        .then((response) => {
          console.log("API Response:", response.data);
          this.applications = response.data;
          this.userRole = this.getUserRole;
          this.$store.dispatch('fetchUserAndApplications');
          console.log("Filtered Applications:", this.filteredApplications);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
  },
  created() {
    this.fetchUserAndApplications();
  },
};
</script>

<style></style>
