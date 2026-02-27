const app = {
    user: null,
    lang: 'en',
    currentChatPartner: null,
    currentPatient: null, // Only used by doctor

    translations: {
        en: {
            lang_name: "Arabic", login_title: "Welcome Back", national_id: "National ID",
            login_id_label: "Phone Number or National ID",
            password: "Password", login_btn: "Login", no_account: "Don't have an account?",
            register_link: "Register here", register_title: "Create Account", role: "Role",
            role_patient: "Patient", role_doctor: "Doctor", full_name: "Full Name",
            phone: "Phone Number", email: "Email", register_btn: "Register",
            has_account: "Already have an account?", login_link: "Login here",
            nav_dashboard: "Dashboard", my_profile: "My Profile", nav_messages: "Messages",
            nav_patients: "Patients", search_btn: "Search", search_patient_placeholder: "Enter Patient National ID...",
            search_doc_placeholder: "Enter Doctor Name...",
            select_doc_msg: "Select a doctor to message...",
            personal_info: "Personal Information", edit: "Edit", save: "Save", cancel: "Cancel",
            my_prescriptions: "My Prescriptions", doctor_welcome: "Welcome, Doctor",
            doctor_instruct: "Use the search bar above to find a patient by their National ID.",
            prescribe_new: "Write Prescription", medications: "Medications", notes: "Doctor's Notes",
            send_prescription: "Send Prescription", no_prescriptions: "No prescriptions found.",
            prescribed_by: "Prescribed by Dr. ", patient_workspace: "Patient Workspace",
            prescriptions_upload: "Upload Medical File",
            chat_title: "Messages", type_message: "Type a message...", send_msg: "Send",
            no_messages: "No messages yet. Say hello!", select_chat_partner: "Select a patient to start chatting",
            back_to_search: "Back to Search",
            approve: "Approve", reject: "Reject", apply_doctor: "Apply for Doctor Role", license_label: "Upload License/Cert (PDF/Image)",
            switch_role: "Switch to", status_pending: "Pending", status_approved: "Approved", status_rejected: "Rejected",
            verify_title: "Verify Your Account", verify_desc: "A 4-digit code was sent to your phone/email. Enter it below:",
            verify_btn: "Verify", verify_error: "Invalid code. Please try again.", verify_success: "Account verified successfully!",
            nav_appointments: "Appointments", book_apt: "Book Appointment", date_label: "Select Date", time_label: "Select Time",
            no_apt: "No appointments scheduled.", my_appointments: "My Appointments",
            notifications: "Notifications", no_notifs: "No new notifications",
            capture_rx: "Capture Prescription", capture: "Capture", cancel: "Cancel",
            search_patient_placeholder: "Enter Patient ID...", search_doc_placeholder: "Find a Doctor..."
        },
        ar: {
            lang_name: "English", login_title: "مرحباً بعودتك", national_id: "الرقم القومي",
            login_id_label: "رقم الهاتف أو الرقم القومي",
            password: "كلمة المرور", login_btn: "تسجيل الدخول", no_account: "ليس لديك حساب؟",
            register_link: "سجل هنا", register_title: "إنشاء حساب", role: "الدور",
            role_patient: "مريض", role_doctor: "طبيب", full_name: "الاسم الكامل",
            phone: "رقم الهاتف", email: "البريد الإلكتروني", register_btn: "تسجيل",
            has_account: "لديك حساب بالفعل؟", login_link: "سجل الدخول هنا",
            nav_dashboard: "لوحة التحكم", my_profile: "ملفي الشخصي", nav_messages: "الرسائل",
            nav_patients: "المرضى", search_btn: "بحث", search_patient_placeholder: "الرقم القومي للمريض...",
            search_doc_placeholder: "بحث عن طبيب...",
            select_doc_msg: "اختر طبيباً للمراسلة...",
            prescriptions_upload: "تحميل ملف طبي",
            personal_info: "المعلومات الشخصية", edit: "تعديل", save: "حفظ", cancel: "إلغاء",
            my_prescriptions: "الروشتات الطبية", doctor_welcome: "مرحباً بك، دكتور",
            doctor_instruct: "البحث عن مريض بالرقم القومي للبدء.",
            prescribe_new: "كتابة روشتة جديدة", medications: "الأدوية", notes: "ملاحظات الطبيب",
            send_prescription: "إرسال الروشتة", no_prescriptions: "لا توجد روشتات.",
            prescribed_by: "وصفها د. ", patient_workspace: "ملف المريض الحالي",
            chat_title: "الرسائل", type_message: "اكتب رسالة...", send_msg: "إرسال",
            no_messages: "لا توجد رسائل. ابدأ المحادثة!", select_chat_partner: "اختر مريضاً لبدء المحادثة",
            back_to_search: "العودة للبحث",
            admin_panel: "لوحة التحكم", pending_apps: "طلبات الأطباء", approve: "موافقة", 
            reject: "رفض", apply_doctor: "التقديم كطبيب", license_label: "تحميل الرخصة (PDF/صورة)",
            switch_role: "التبديل إلى", status_pending: "قيد الانتظار", status_approved: "تمت الموافقة", status_rejected: "مرفوض",
            verify_title: "تأكيد حسابك", verify_desc: "تم إرسال كود من 4 أرقام لهاتفك/بريدك. أدخله أدناه:",
            verify_btn: "تأكيد", verify_error: "الكود غير صحيح. حاول مرة أخرى.", verify_success: "تم تأكيد الحساب بنجاح!",
            notifications: "التنبيهات", no_notifs: "لا توجد تنبيهات جديدة",
            capture_rx: "التقاط صورة الروشتة", capture: "التقاط", nav_appointments: "المواعيد",
            book_apt: "حجز موعد", date_label: "التاريخ", time_label: "الوقت",
            nav_settings: "الإعدادات", nav_pharmacy: "الصيدليات",
            city: "المدينة", governorate: "المحافظة",
            search_pharmacy_placeholder: "البحث عن صيدليات...",
            pharmacy_name: "اسم الصيدلية", pharmacy_address: "العنوان", pharmacy_phone: "الهاتف",
            pharmacy_distance: "المسافة", no_pharmacies: "لا توجد صيدليات."
        }
    },

    // ─────────────────────────────────────────────────────────────
    // REAL BACKEND API - Connects to Express Server
    // ─────────────────────────────────────────────────────────────
    geo: {
        async getPosition() {
            return new Promise((resolve, reject) => {
                if (!navigator.geolocation) return reject("No geo");
                navigator.geolocation.getCurrentPosition(resolve, reject);
            });
        }
    },
    
    api: async (endpoint, method = 'GET', body = null) => {
        const token = localStorage.getItem('mr_token');
        const headers = { 'Content-Type': 'application/json' };
        if (token) headers['Authorization'] = `Bearer ${token}`;

        // Handle absolute vs relative URLs (for local file display support)
        let baseUrl = '/api';
        if (window.location.protocol === 'file:') {
            baseUrl = 'http://127.0.0.1:5000/api';
        } else if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            if (window.location.port !== '5000') baseUrl = `http://${window.location.hostname}:5000/api`;
        } else if (window.location.port && window.location.port !== '5000') {
            baseUrl = `${window.location.protocol}//${window.location.hostname}:5000/api`;
        }
        
        const targetUrl = endpoint.startsWith('http') ? endpoint : `${baseUrl}${endpoint}`;
        
        console.log(`[API] ${method} ${targetUrl}`, body);

        const options = { method, headers };
        if (body && method !== 'GET') options.body = JSON.stringify(body);

        try {
            const response = await fetch(targetUrl, options);
            const data = await response.json();
            
            if (!response.ok) {
                if (response.status === 401) {
                    localStorage.removeItem('mr_token');
                    if (!endpoint.includes('/auth/login')) app.auth.logout();
                }
                const errorMsg = data.msg || data.message || data.error || 'API Request failed';
                console.warn(`[API] Error ${response.status}:`, errorMsg);
                throw new Error(errorMsg);
            }
            return data;
        } catch (err) {
            console.error('[API] Fetch Error:', err);
            const msg = err.name === 'TypeError' && err.message === 'Failed to fetch' 
                ? 'Could not connect to server. Ensure backend is running.' 
                : err.message;
            app.ui.toast(msg, 'error');
            throw err;
        }
    },

    notifications: {
        list: [],
        async load() {
            try {
                const data = await app.api('/notifications');
                this.list = data;
                this.updateUI();
            } catch (err) {}
        },
        updateUI() {
            const badge = document.getElementById('notifBadge');
            const listContainer = document.getElementById('notifList');
            if (!badge || !listContainer) return;

            const unread = this.list.filter(n => !n.isRead).length;
            if (unread > 0) {
                badge.textContent = unread;
                badge.classList.remove('hidden');
            } else {
                badge.classList.add('hidden');
            }

            if (this.list.length === 0) {
                listContainer.innerHTML = `<p style="text-align:center; padding:20px; font-size:12px; color:var(--text-muted);" data-i18n="no_notifs">${app.translations[app.lang].no_notifs}</p>`;
                return;
            }

            listContainer.innerHTML = this.list.map(n => `
                <div class="notif-item ${n.isRead ? '' : 'unread'}" onclick="app.notifications.markRead('${n.id || n._id}')">
                    <div style="font-size:12px; font-weight:600;">${n.message}</div>
                    <div style="font-size:10px; color:var(--text-muted); margin-top:4px;">${new Date(n.createdAt || n.date).toLocaleString()}</div>
                </div>
            `).join('');
        },
        async markRead(id) {
            try {
                await app.api(`/notifications/${id}/read`, 'PUT');
                this.load();
            } catch (err) {}
        }
    },

    profile: {
        triggerUpload() {
            document.getElementById('profilePicInput').click();
        },
        async handleUpload(e) {
            const file = e.target.files[0];
            if (!file) return;
            
            const allowed = ['image/jpeg', 'image/png', 'image/jpg'];
            if (!allowed.includes(file.type)) return app.ui.toast("Only JPG and PNG are allowed", "error");
            if (file.size > 2 * 1024 * 1024) return app.ui.toast("File too large (max 2MB)", "error");

            const formData = new FormData();
            formData.append('file', file);

            try {
                // In demo mode this returns a placeholder URL via the mock
                const { url } = await app.api('/users/upload', 'POST', { filename: file.name });
                await app.api('/users/profile', 'PUT', { profilePic: url });
                app.user.profilePic = url;
                app.profile.updateDisplay();
                app.ui.toast("Avatar updated", "success");
            } catch (err) {
                app.ui.toast("Upload failed", "error");
            }
        },
        updateDisplay() {
            const headerAvatar = document.getElementById('headerAvatar');
            if (!headerAvatar) return;
            const pic = app.user.profilePic;
            if (pic) {
                headerAvatar.innerHTML = `<img src="${pic}" alt="Profile">`;
            } else {
                headerAvatar.textContent = app.user.name.charAt(0).toUpperCase();
            }
            const heros = ['heroAvatar', 'heroAvatarDoc'];
            heros.forEach(id => {
                const el = document.getElementById(id);
                if (el) el.innerHTML = pic ? `<img src="${pic}">` : (app.user.name ? app.user.name.charAt(0) : '');
            });
        },
        async saveGeneralSettings() {
            const email = document.getElementById('profEmail').value;
            const city = document.getElementById('profCity').value;
            try {
                const updated = await app.api('/users/profile', 'PUT', { email, city });
                app.user = updated;
                app.ui.toast("Profile updated", "success");
            } catch (err) { app.ui.toast("Failed to save", "error"); }
        },
        async saveDocSettings() {
            const specialization = document.getElementById('profSpecialization').value;
            const clinicAddress = document.getElementById('profClinic').value;
            const contactInfo = document.getElementById('profContact').value;
            try {
                const updated = await app.api('/users/profile', 'PUT', { specialization, clinicAddress, contactInfo });
                app.user = updated;
                app.ui.toast("Professional info updated", "success");
            } catch (err) { app.ui.toast("Failed to save", "error"); }
        },
        async uploadProfessionalDocs() {
            const cvFile = document.getElementById('doctorCvFile')?.files[0];
            const certFile = document.getElementById('doctorCertFile')?.files[0];
            
            if (!cvFile && !certFile) return app.ui.toast("Select a file to upload", "info");

            const uploadFile = async (file) => {
                const formData = new FormData();
                formData.append('file', file);
                const baseUrl = window.location.protocol === 'file:' ? 'http://localhost:5000/api' : '/api';
                const res = await fetch(`${baseUrl}/users/upload`, {
                    method: 'POST',
                    headers: { 'Authorization': `Bearer ${localStorage.getItem('mr_token')}` },
                    body: formData
                });
                return (await res.json()).url;
            };

            try {
                const updates = {};
                if (cvFile) updates.cvUrl = await uploadFile(cvFile);
                if (certFile) updates.certificatesUrls = [await uploadFile(certFile)]; // Simplified for now
                
                await app.api('/users/profile', 'PUT', updates);
                app.ui.toast("Documents synced", "success");
                app.ui.renderProfile();
            } catch (err) { app.ui.toast("Upload failed", "error"); }
        }
    },

    auth: {
        init() {
            const token = localStorage.getItem('mr_token');
            if (token) {
                // Use mock API to restore session silently
                app.api('/users/profile')
                    .then(user => { app.user = user; app.ui.showApp(); })
                    .catch(() => {
                        localStorage.removeItem('mr_token');
                        app._db.set('session', null);
                        app.user = null;
                        app.ui.showLogin();
                    });
                return;
            }
            app.ui.showLogin();
        },

        async register(e) {
            e.preventDefault();
            const id = document.getElementById('regId').value.trim();
            const name = document.getElementById('regName').value.trim();
            const phone = document.getElementById('regPhone').value.trim();
            const email = document.getElementById('regEmail').value.trim();
            const password = document.getElementById('regPassword').value;
            const city = document.getElementById('regCity').value.trim();
            const gov = document.getElementById('regGov').value;

            if (!id || !name || !phone || !password || !city || !gov) {
                app.ui.toast('Please fill in all required fields', 'error');
                return;
            }

            try {
                const body = { id, name, phone, email, password, city, governorate: gov };
                await app.api('/auth/register', 'POST', body);
                app.ui.toast("Registered! Please login", "success");
                app.ui.showLogin();
            } catch (err) {
                app.ui.toast(err.message || "Registration failed", "error");
            }
        },

        async login(e) {
            e.preventDefault();
            const loginId  = document.getElementById('loginId').value.trim();
            const password = document.getElementById('loginPassword').value;

            if (!loginId || !password) {
                app.ui.toast('Please enter your login ID and password', 'error');
                return;
            }

            try {
                const res = await app.api('/auth/login', 'POST', { loginId, password });
                localStorage.setItem('mr_token', res.token);
                app.user = res.user;
                app.ui.toast('Welcome back, ' + res.user.name + '!', 'success');
                app.ui.showApp();
            } catch (err) {}
        },

        logout() {
            localStorage.removeItem('mr_token');
            if (app.ui.notifInterval) clearInterval(app.ui.notifInterval);
            app.user = null;
            location.reload();
        }
    },

    ui: {
        toastTimeout: null,
        toast(msg, type="success") {
            const t = document.getElementById('toast');
            if (!t) return;
            t.textContent = msg; t.className = `toast ${type}`;
            clearTimeout(this.toastTimeout);
            this.toastTimeout = setTimeout(() => t.className='toast hidden', 3000);
        },
        async showCamera() {
            const modal = document.getElementById('cameraModal');
            const video = document.getElementById('cameraVideo');
            modal.classList.remove('hidden');
            try {
                this.stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
                video.srcObject = this.stream;
            } catch (err) {
                app.ui.toast("Camera access denied or not available", "error");
                this.hideCamera();
            }
        },
        toggleNotifs() {
            const dropdown = document.getElementById('notifDropdown');
            if (dropdown) dropdown.classList.toggle('hidden');
            if (!dropdown.classList.contains('hidden')) {
                app.notifications.load();
            }
        },
        hideCamera() {
            const modal = document.getElementById('cameraModal');
            modal.classList.add('hidden');
            if (this.stream) {
                this.stream.getTracks().forEach(track => track.stop());
                this.stream = null;
            }
        },
        showLogin() {
            document.getElementById('appContainer')?.classList.add('hidden');
            document.getElementById('authContainer')?.classList.remove('hidden');
            document.getElementById('registerForm')?.classList.add('hidden');
            document.getElementById('loginForm')?.classList.remove('hidden');
        },
        showRegister() {
            document.getElementById('loginForm')?.classList.add('hidden');
            document.getElementById('registerForm')?.classList.remove('hidden');
        },
        showApp() {
            document.getElementById('authContainer')?.classList.add('hidden');
            document.getElementById('appContainer')?.classList.remove('hidden');
            
            const headerName = document.getElementById('headerName');
            if (headerName) headerName.textContent = app.user.name;
            app.profile.updateDisplay();

            const switcher = document.getElementById('roleSwitcher');
            if (app.user.roles && app.user.roles.length > 1) {
                switcher?.classList.remove('hidden');
                const label = document.getElementById('currentRoleLabel');
                if (label) label.textContent = app.translations[app.lang][`role_${app.user.activeRole}`] || app.user.activeRole;
            } else {
                switcher?.classList.add('hidden');
            }

            // Start Notification Polling
            app.notifications.load();
            this.notifInterval = setInterval(() => app.notifications.load(), 30000);

            // Initial view based on role
            if (app.user.activeRole === 'patient') {
                this.showView('dashboard');
            } else if (app.user.activeRole === 'doctor') {
                this.showView('dashboard');
            } else if (app.user.activeRole === 'admin') {
                this.showView('admin');
            }
            app.i18n.apply();
        },

        toggleRoleSwitch() {
            const currentIdx = app.user.roles.indexOf(app.user.activeRole);
            const nextIdx = (currentIdx + 1) % app.user.roles.length;
            app.ui.switchRole(app.user.roles[nextIdx]);
        },

        async switchRole(role) {
            try {
                const res = await app.api('/users/profile', 'PUT', { activeRole: role });
                app.user = res;
                app.ui.toast(`${app.translations[app.lang].switch_role || 'Switched to'} ${app.translations[app.lang][`role_${role}`] || role}`, "info");
                app.ui.showApp();
            } catch (err) {}
        },

        updateNav(active) {
            const nav = document.getElementById('navMenu');
            if (!nav) return;
            let navHtml = '';
            
            if (app.user.activeRole === 'patient') {
                navHtml += `<a href="#" class="nav-item ${active === 'dashboard' ? 'active' : ''}" onclick="app.ui.showView('dashboard')"><i class="fa-solid fa-house"></i> <span data-i18n="nav_dashboard">${app.translations[app.lang].nav_dashboard}</span></a>`;
                navHtml += `<a href="#" class="nav-item ${active === 'pharmacy' ? 'active' : ''}" onclick="app.ui.showView('pharmacy')"><i class="fa-solid fa-capsules"></i> <span data-i18n="nav_pharmacy">Pharmacies</span></a>`;
                navHtml += `<a href="#" class="nav-item ${active === 'messages' ? 'active' : ''}" onclick="app.ui.showView('messages')"><i class="fa-solid fa-message"></i> <span data-i18n="nav_messages">${app.translations[app.lang].nav_messages}</span></a>`;
                navHtml += `<a href="#" class="nav-item ${active === 'appointments' ? 'active' : ''}" onclick="app.ui.showView('appointments')"><i class="fa-solid fa-calendar-check"></i> <span data-i18n="nav_appointments">${app.translations[app.lang].nav_appointments}</span></a>`;
            } else if (app.user.activeRole === 'doctor') {
                navHtml += `<a href="#" class="nav-item ${active === 'dashboard' ? 'active' : ''}" onclick="app.ui.showView('dashboard')"><i class="fa-solid fa-hospital-user"></i> <span data-i18n="nav_patients">${app.translations[app.lang].nav_patients}</span></a>`;
                navHtml += `<a href="#" class="nav-item ${active === 'messages' ? 'active' : ''}" onclick="app.ui.showView('messages')"><i class="fa-solid fa-message"></i> <span data-i18n="nav_messages">${app.translations[app.lang].nav_messages}</span></a>`;
                navHtml += `<a href="#" class="nav-item ${active === 'appointments' ? 'active' : ''}" onclick="app.ui.showView('appointments')"><i class="fa-solid fa-calendar-check"></i> <span data-i18n="nav_appointments">${app.translations[app.lang].nav_appointments}</span></a>`;
            } else if (app.user.activeRole === 'admin') {
                navHtml += `<a href="#" class="nav-item ${active === 'admin' ? 'active' : ''}" onclick="app.ui.showView('admin')"><i class="fa-solid fa-shield-halved"></i> <span data-i18n="admin_panel">Admin Panel</span></a>`;
            }

            navHtml += `
                <a href="#" class="nav-item ${active === 'profile' ? 'active' : ''}" onclick="app.ui.showView('profile')">
                    <i class="fa-solid fa-user-gear"></i> <span data-i18n="my_profile">My Profile</span>
                </a>
                <a href="#" class="nav-item ${active === 'settings' ? 'active' : ''}" onclick="app.ui.showView('settings')">
                    <i class="fa-solid fa-cog"></i> <span data-i18n="nav_settings">Settings</span>
                </a>
            `;
            nav.innerHTML = navHtml;
            app.i18n.apply();
        },

        showView(view) {
            document.querySelectorAll('.dashboard-content').forEach(c => c.classList.add('hidden'));
            const mainView = document.getElementById('mainView');
            const pharmacySearchSection = document.getElementById('pharmacySearchSection');
            const doctorSearch = document.getElementById('doctorSearch');
            const patientDoctorSelect = document.getElementById('patientDoctorSelect');

            if (mainView) mainView.classList.remove('hidden');
            if (pharmacySearchSection) pharmacySearchSection.classList.add('hidden');
            if (doctorSearch) doctorSearch.classList.add('hidden');
            if (patientDoctorSelect) patientDoctorSelect.classList.add('hidden');

            if (view === 'pharmacy') {
                if (pharmacySearchSection) pharmacySearchSection.classList.remove('hidden');
                if (mainView) mainView.classList.add('hidden');
                app.pharmacy.renderSearch();
            } else {
                if (view === 'dashboard') {
                    if (app.user.activeRole === 'patient') {
                        app.ui.renderPatientDashboard();
                        if (patientDoctorSelect) patientDoctorSelect.classList.remove('hidden');
                    } else if (app.user.activeRole === 'doctor') {
                        app.ui.renderDoctorDashboard();
                        if (doctorSearch) doctorSearch.classList.remove('hidden');
                    } else if (app.user.activeRole === 'admin') {
                        app.ui.renderAdminPanel();
                    }
                } else if (view === 'profile') {
                    app.ui.renderProfile();
                } else if (view === 'messages') {
                    app.ui.renderChatView();
                } else if (view === 'appointments') {
                    app.ui.renderAppointments();
                } else if (view === 'settings') {
                    app.ui.renderSettings();
                } else if (view === 'admin') {
                    app.ui.renderAdminPanel();
                }
            }
            this.updateNav(view);
        },

        async renderPatientDashboard() {
            const p = app.user;
            const html = `
                <div class="content-header">
                    <h1 class="page-title" data-i18n="nav_dashboard">Dashboard</h1>
                </div>
                
                <div class="dashboard-widgets">
                    <div class="card stagger-2">
                        <div class="card-header"><h2 data-i18n="patient_status">Medical Status</h2></div>
                        <div class="status-indicator" style="display:flex; align-items:center; gap:15px; padding:10px 0;">
                            <div style="width:12px; height:12px; border-radius:50%; background:var(--success);"></div>
                            <span style="font-weight:600;">Account Active & Verified</span>
                        </div>
                        <p class="text-muted" style="font-size:13px;">Your medical records are synchronized and up to date.</p>
                    </div>
                    
                    <div class="card stagger-3">
                        <div class="card-header"><h2 data-i18n="prescriptions_upload">Quick Upload</h2></div>
                        <div class="form-group">
                            <label>Medical File (PDF or Image)</label>
                            <div style="display:flex; gap:10px;">
                                <input type="file" id="patientFileRx" accept="image/*,.pdf" style="flex:1; padding:10px; font-size:12px;">
                                <button class="btn secondary-btn small" onclick="app.ui.showCamera()">
                                    <i class="fa-solid fa-camera"></i>
                                </button>
                            </div>
                        </div>
                        <button class="btn primary-btn full-width" onclick="app.patient.uploadPrescription()">
                            <i class="fa-solid fa-upload"></i> Upload & Sync
                        </button>
                    </div>
                </div>

                <div class="stagger-4">
                    <h2 class="page-title mt-5" data-i18n="my_prescriptions">My Medical Records</h2>
                    <div class="content-grid" id="patientPrescriptionsList"></div>
                </div>
            `;
            const mainView = document.getElementById('mainView');
            if (mainView) mainView.innerHTML = html;
            app.patient.loadPrescriptions();
            app.i18n.apply();
        },

        renderProfile() {
            const p = app.user;
            const isDoc = p.roles.includes('doctor');
            const html = `
                <div class="content-header">
                    <h1 class="page-title" data-i18n="my_profile">My Profile</h1>
                </div>

                <div class="profile-hero card stagger-1 mb-4" style="display:flex; align-items:center; gap :30px; padding:30px;">
                    <div class="avatar-container" style="width:120px; height:120px;" onclick="app.profile.triggerUpload()">
                        <div class="avatar large" id="heroAvatar">${p.profilePic ? `<img src="${p.profilePic}">` : p.name.charAt(0)}</div>
                        <div class="avatar-overlay" style="font-size:24px;"><i class="fa-solid fa-camera"></i></div>
                    </div>
                    <div>
                        <h1 style="margin:0; font-size:28px;">${p.name}</h1>
                        <p class="text-muted">${app.translations[app.lang][`role_${p.activeRole}`]} | ID: ${p.id}</p>
                        <div style="display:flex; gap:10px; margin-top:8px;">
                            <span class="status-badge approved">${p.isVerified ? 'Verified' : 'Unverified'}</span>
                            ${isDoc ? '<span class="status-badge approved">Professional</span>' : ''}
                        </div>
                    </div>
                </div>

                <div class="dashboard-widgets">
                    <div class="card stagger-2">
                        <div class="card-header"><h2>Account Settings</h2></div>
                        <div class="form-group">
                            <label>Full Name</label>
                            <input type="text" value="${p.name}" disabled>
                        </div>
                        <div class="form-group">
                            <label>Phone Number</label>
                            <input type="text" value="${p.phone}" disabled>
                        </div>
                        <div class="form-group">
                            <label>Email Address</label>
                            <input type="email" id="profEmail" value="${p.email || ''}">
                        </div>
                        <div class="form-row">
                            <div class="form-group half">
                                <label>City</label>
                                <input type="text" id="profCity" value="${p.city || ''}">
                            </div>
                            <div class="form-group half">
                                <label>Governorate</label>
                                <input type="text" value="${p.governorate}" disabled>
                            </div>
                        </div>
                        <button class="btn primary-btn full-width" onclick="app.profile.saveGeneralSettings()">Save Changes</button>
                    </div>

                    ${isDoc ? `
                    <div class="card stagger-3">
                        <div class="card-header"><h2>Professional Center</h2></div>
                        <div class="form-group">
                            <label>Specialization</label>
                            <input type="text" id="profSpecialization" value="${p.specialization || ''}">
                        </div>
                        <div class="form-group">
                            <label>Clinic Address</label>
                            <input type="text" id="profClinic" value="${p.clinicAddress || ''}">
                        </div>
                        <div class="form-group">
                            <label>Contact Info</label>
                            <input type="text" id="profContact" value="${p.contactInfo || ''}">
                        </div>
                        <hr class="mb-4 mt-4">
                        <h3 style="font-size:14px; margin-bottom:15px;">Professional Documents</h3>
                        <div class="form-group">
                            <label>CV & Certificates (PDF/Images)</label>
                            <input type="file" id="doctorCvFile" accept="image/*,.pdf" class="mb-2">
                        </div>
                        <button class="btn secondary-btn full-width mb-3" onclick="app.profile.uploadProfessionalDocs()">Sync Files</button>
                        <button class="btn primary-btn full-width" onclick="app.profile.saveDocSettings()">Update Pro Info</button>
                    </div>
                    ` : `
                    <div class="card stagger-3">
                        <div class="card-header"><h2>Special Access</h2></div>
                        <p class="text-muted mb-4">Are you a healthcare professional? Secure your official doctor account to start providing care.</p>
                        <button class="btn secondary-btn full-width" onclick="app.ui.showDoctorApply()">Apply for Doctor Role</button>
                    </div>
                    `}
                </div>
            `;
            const mainView = document.getElementById('mainView');
            if (mainView) mainView.innerHTML = html;
            app.i18n.apply();
        },

        showDoctorApply() {
            const html = `
                <div class="card" style="max-width:500px; margin: 40px auto;">
                    <div class="card-header"><h2 data-i18n="apply_doctor">Apply as Doctor</h2></div>
                    <div class="form-group">
                        <label data-i18n="license_label">Upload License/Cert (PDF/Image)</label>
                        <input type="file" id="doctorLicenseFile" accept="image/*,.pdf">
                    </div>
                    <button class="btn primary-btn full-width" onclick="app.patient.applyForDoctor()">Submit Application</button>
                    <button class="btn text-btn full-width mt-2" onclick="app.ui.renderPatientDashboard()">Cancel</button>
                </div>
            `;
            const mainView = document.getElementById('mainView');
            if (mainView) mainView.innerHTML = html;
            app.i18n.apply();
        },

        async renderAppointments() {
            try {
                const isDoc = app.user.activeRole === 'doctor';
                const apts = await app.api('/clinical/appointments');
                
                const html = `
                    <div class="content-header">
                        <h1 class="page-title" data-i18n="nav_appointments">Appointments</h1>
                        ${!isDoc ? `<button class="btn primary-btn" onclick="app.ui.showAptBooking()"><i class="fa-solid fa-plus"></i> ${app.translations[app.lang].book_apt}</button>` : ''}
                    </div>
                    <div class="content-grid">
                        ${apts.length ? apts.map(a => {
                            const partnerName = isDoc ? (a.patientId?.name || 'Patient') : (a.doctorId?.name || 'Doctor');
                            const dte = new Date(a.date).toLocaleDateString(app.lang==='ar'?'ar-EG':'en-US');
                            return `
                                <div class="card stagger-1">
                                    <div style="display:flex; justify-content:space-between; align-items:center;">
                                        <div>
                                            <div style="font-weight:700; font-size:18px; color:var(--primary);">${partnerName}</div>
                                            <div class="text-muted" style="font-size:14px;"><i class="fa-solid fa-calendar"></i> ${dte} | <i class="fa-solid fa-clock"></i> ${a.time}</div>
                                        </div>
                                        <span class="status-badge approved">${a.status}</span>
                                    </div>
                                </div>
                            `;
                        }).join('') : `<p class="text-center text-muted mt-5" data-i18n="no_apt">No appointments scheduled.</p>`}
                    </div>
                `;
                const mainView = document.getElementById('mainView');
                if (mainView) mainView.innerHTML = html;
                app.i18n.apply();
            } catch (err) {}
        },

        async showAptBooking() {
            try {
                const docs = await app.api('/users/doctors');
                const html = `
                    <div class="card" style="max-width:500px; margin: 40px auto;">
                        <div class="card-header"><h2>${app.translations[app.lang].book_apt}</h2></div>
                        <div class="form-group">
                            <label>Select Doctor</label>
                            <select id="aptDocId" class="full-width" style="padding:10px; border-radius:8px; border:1px solid var(--border);">
                                ${docs.map(d => `<option value="${d.id}">${d.name}</option>`).join('')}
                            </select>
                        </div>
                        <div class="form-row">
                            <div class="form-group half">
                                <label data-i18n="date_label">Date</label>
                                <input type="date" id="aptDate" class="full-width" style="padding:10px; border-radius:8px; border:1px solid var(--border);">
                            </div>
                            <div class="form-group half">
                                <label data-i18n="time_label">Time</label>
                                <input type="time" id="aptTime" class="full-width" style="padding:10px; border-radius:8px; border:1px solid var(--border);">
                            </div>
                        </div>
                        <div class="text-right mt-3">
                            <button class="btn text-btn mr-2" onclick="app.ui.renderAppointments()">Cancel</button>
                            <button class="btn primary-btn" onclick="app.patient.confirmApt()">Book Now</button>
                        </div>
                    </div>
                `;
                const mainView = document.getElementById('mainView');
                if (mainView) mainView.innerHTML = html;
                app.i18n.apply();
            } catch (err) {}
        },

        async renderChatView() {
            const partnerId = app.currentChatPartner;
            if (!partnerId) {
                const mainView = document.getElementById('mainView');
                if (mainView) mainView.innerHTML = `<h2 class="center mt-5 text-muted" data-i18n="select_chat_partner">Select someone to chat with</h2>`;
                app.i18n.apply();
                return;
            }

            try {
                const partner = await app.api(`/users/profile?id=${partnerId}`); 
                const html = `
                    <div class="card" style="height: calc(100vh - 150px); display:flex; flex-direction:column; padding:0; overflow:hidden;">
                        <div class="card-header" style="padding: 15px 24px; background: white; margin:0;">
                            <div style="display:flex; align-items:center; gap:12px;">
                                <div class="avatar small" style="width:40px;height:40px;">${partner.profilePic ? `<img src="${partner.profilePic}">` : partner.name.charAt(0)}</div>
                                <h2 style="font-size:18px;">${partner.name}</h2>
                            </div>
                            <button class="btn text-btn" onclick="app.user.activeRole === 'doctor' ? app.ui.renderDoctorWorkspace() : app.ui.renderPatientDashboard()"><i class="fa-solid fa-arrow-left"></i> Back</button>
                        </div>
                        <div id="chatMessages" style="flex:1; overflow-y:auto; padding: 24px; background: #f8fafc; display:flex; flex-direction:column; gap:12px;"></div>
                        <div style="padding: 20px 24px; background: white; border-top: 1px solid var(--border); display:flex; gap:12px; align-items:center;">
                            <input type="text" id="chatInput" placeholder="${app.translations[app.lang].type_message}" style="flex:1; padding:12px 20px; border-radius:25px; border:1px solid var(--border); background:var(--bg-main); outline:none;">
                            <button class="btn primary-btn" style="width:45px; height:45px; border-radius:50%; padding:0;" onclick="app.chat.send()"><i class="fa-solid fa-paper-plane"></i></button>
                        </div>
                    </div>
                `;
                const mainView = document.getElementById('mainView');
                if (mainView) mainView.innerHTML = html;
                app.chat.loadMessages();
                app.i18n.apply();
            } catch (err) {}
        },

        async renderAdminPanel() {
            try {
                const apps = await app.api('/admin/applications');
                const users = await app.api('/admin/users');
                const html = `
                    <h1 class="page-title" data-i18n="admin_panel">Admin Panel</h1>
                    <div class="card mb-4">
                        <div class="card-header"><h2 data-i18n="pending_apps">Doctor Applications</h2></div>
                        <div class="table-container" style="overflow-x:auto;">
                            <table style="width:100%; border-collapse: collapse; min-width:600px;">
                                <thead>
                                    <tr style="text-align:left; border-bottom: 2px solid var(--border);">
                                        <th style="padding:12px;">User</th>
                                        <th style="padding:12px;">Document</th>
                                        <th style="padding:12px; text-align:right;">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${apps.length ? apps.map(a => `
                                        <tr style="border-bottom: 1px solid var(--border);">
                                            <td style="padding:12px;">${a.userId?.name || a.userId}</td>
                                            <td style="padding:12px;"><a href="${a.docUrl}" target="_blank" class="text-btn">View License</a></td>
                                            <td style="padding:12px; text-align:right;">
                                                <button class="btn secondary-btn small mr-2" onclick="app.admin.reject('${a._id}')">Reject</button>
                                                <button class="btn primary-btn small" onclick="app.admin.approve('${a._id}')">Approve</button>
                                            </td>
                                        </tr>
                                    `).join('') : '<tr><td colspan="3" style="text-align:center; padding:20px;">No pending applications</td></tr>'}
                                </tbody>
                            </table>
                        </div>
                    </div>
                `;
                const mainView = document.getElementById('mainView');
                if (mainView) mainView.innerHTML = html;
                app.i18n.apply();
            } catch (err) {}
        },

        renderSettings() {
            const html = `
                <div class="content-header"><h1 class="page-title" data-i18n="nav_settings">Settings</h1></div>
                <div class="content-grid" style="max-width: 800px;">
                    <div class="card stagger-1">
                        <div class="card-header"><h2>Preferences</h2></div>
                        <div style="display:flex; justify-content:space-between; align-items:center; padding:10px 0;">
                            <div><strong>Language / اللغة</strong></div>
                            <button class="btn secondary-btn small" onclick="app.i18n.toggle()">${app.lang === 'en' ? 'عربي' : 'English'}</button>
                        </div>
                    </div>
                    <button class="btn secondary-btn full-width mt-4" onclick="app.auth.logout()">Logout</button>
                </div>
            `;
            const mainView = document.getElementById('mainView');
            if (mainView) mainView.innerHTML = html;
            app.i18n.apply();
        },

        renderDoctorDashboard() {
            const mainView = document.getElementById('mainView');
            if (mainView) {
                mainView.innerHTML = `
                    <div class="card" style="margin-top: 50px; text-align:center; padding: 60px 40px;">
                        <i class="fa-solid fa-hospital-user" style="font-size: 40px; color: var(--primary); margin-bottom:20px;"></i>
                        <h1 class="page-title" data-i18n="doctor_welcome">Welcome, Doctor</h1>
                        <p class="text-muted" data-i18n="doctor_instruct">Search for a patient by National ID to start.</p>
                    </div>
                `;
            }
            app.i18n.apply();
        },

        renderDoctorWorkspace() {
            const p = app.currentPatient;
            if (!p) return this.renderDoctorDashboard();

            const html = `
                <div class="content-header" style="flex-wrap: wrap; gap: 15px;">
                    <h1 class="page-title m-0">Patient: ${p.name}</h1>
                    <button class="btn primary-btn" onclick="app.currentChatPartner='${p.id}'; app.ui.renderChatView();">Message Patient</button>
                </div>
                <div class="dashboard-widgets">
                    <div class="card stagger-1">
                        <div class="card-header"><h2>Write Prescription</h2></div>
                        <div class="form-group"><label>Medications</label><input type="text" id="rxMeds"></div>
                        <div class="form-group"><label>Notes</label><input type="text" id="rxNotes"></div>
                        <div class="form-group">
                            <label>File Attachment</label>
                            <div style="display:flex; gap:10px;">
                                <input type="file" id="doctorRxFile" accept="image/*,.pdf" style="flex:1;">
                                <button class="btn secondary-btn small" onclick="app.ui.showCamera(); app.doctor.activeCapture=true;"><i class="fa-solid fa-camera"></i></button>
                            </div>
                        </div>
                        <button class="btn primary-btn full-width mt-3" onclick="app.doctor.prescribe()">Send Prescription</button>
                    </div>
                    <div class="card stagger-2">
                        <div class="card-header"><h2>History</h2></div>
                        <div id="doctorPrescriptionsList"></div>
                    </div>
                </div>
            `;
            const mainView = document.getElementById('mainView');
            if (mainView) mainView.innerHTML = html;
            app.doctor.loadPrescriptions();
            app.i18n.apply();
        }
    },

    clinical: {
        handlePrescriptionFile(e) {
            const file = e.target.files[0];
            if (!file) return;
            // Handle file selection and preview if needed
        },
        async captureImage() {
            const video = document.getElementById('cameraVideo');
            const canvas = document.getElementById('cameraCanvas');
            const context = canvas.getContext('2d');
            
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            context.drawImage(video, 0, 0, canvas.width, canvas.height);
            
            canvas.toBlob(async (blob) => {
                const file = new File([blob], `capture-${Date.now()}.jpg`, { type: 'image/jpeg' });
                const formData = new FormData();
                formData.append('file', file);

                try {
                    let baseUrl = '/api';
                    if (window.location.protocol === 'file:') baseUrl = 'http://127.0.0.1:5000/api';
                    else if (window.location.port && window.location.port !== '5000') baseUrl = `${window.location.protocol}//${window.location.hostname}:5000/api`;
                    const res = await fetch(`${baseUrl}/users/upload`, {
                        method: 'POST',
                        headers: { 'Authorization': `Bearer ${localStorage.getItem('mr_token')}` },
                        body: formData
                    });
                    const { url } = await res.json();
                    
                    const isDoc = app.user.activeRole === 'doctor';
                    const patientId = isDoc ? app.currentPatient.id : app.user.id;
                    
                    await app.api('/clinical/prescribe', 'POST', { 
                        patientId, 
                        medications: isDoc ? "Doctor Camera Capture" : "Patient Capture", 
                        notes: isDoc ? "Captured by doctor during session" : "Captured via system camera", 
                        fileUrl: url 
                    });
                    app.ui.toast("Captured and Uploaded", "success");
                    app.ui.hideCamera();
                    if (isDoc) app.doctor.loadPrescriptions();
                    else app.patient.loadPrescriptions();
                } catch (err) {}
            }, 'image/jpeg');
        }
    },

    patient: {
        async applyForDoctor() {
            const fileInput = document.getElementById('doctorLicenseFile');
            if (!fileInput || !fileInput.files.length) return app.ui.toast("Select a file", "error");
            const formData = new FormData();
            formData.append('file', fileInput.files[0]);
            try {
                let baseUrl = '/api';
                if (window.location.protocol === 'file:') baseUrl = 'http://127.0.0.1:5000/api';
                else if (window.location.port && window.location.port !== '5000') baseUrl = `${window.location.protocol}//${window.location.hostname}:5000/api`;
                const res = await fetch(`${baseUrl}/users/upload`, {
                    method: 'POST',
                    headers: { 'Authorization': `Bearer ${localStorage.getItem('mr_token')}` },
                    body: formData
                });
                const { url } = await res.json();
                await app.api('/users/apply', 'POST', { docUrl: url });
                app.ui.toast("Application submitted", "success");
                app.ui.renderPatientDashboard();
            } catch (err) {}
        },
        async confirmApt() {
            const docId = document.getElementById('aptDocId').value;
            const date = document.getElementById('aptDate').value;
            const time = document.getElementById('aptTime').value;
            if (!date || !time) return app.ui.toast("Select date and time", "error");
            try {
                await app.api('/clinical/appointments', 'POST', { doctorId: docId, date, time });
                app.ui.toast("Booked!", "success");
                app.ui.renderAppointments();
            } catch (err) {}
        },
        async exportToPDF(rxId) {
            try {
                const rx = await app.api(`/clinical/prescriptions/${rxId}`);
                const { jsPDF } = window.jspdf;
                const doc = new jsPDF();
                
                doc.setFontSize(22);
                doc.text("MedRecord Prescription", 20, 20);
                doc.setFontSize(12);
                doc.text(`Patient: ${app.user.name}`, 20, 40);
                doc.text(`Doctor: ${rx.doctorId?.name || 'System'}`, 20, 50);
                doc.text(`Date: ${new Date(rx.date).toLocaleDateString()}`, 20, 60);
                doc.line(20, 65, 190, 65);
                
                doc.setFontSize(16);
                doc.text("Medications:", 20, 80);
                doc.setFontSize(12);
                doc.text(rx.medications, 30, 90);
                
                doc.setFontSize(16);
                doc.text("Notes:", 20, 110);
                doc.setFontSize(12);
                doc.text(rx.notes, 30, 120);
                
                doc.save(`Prescription_${rxId}.pdf`);
            } catch (err) {
                app.ui.toast("PDF Export failed", "error");
            }
        }
    },

    doctor: {
        async searchPatient() {
            const id = document.getElementById('patientSearchInput').value;
            try {
                const p = await app.api(`/users/profile?id=${id}`);
                app.currentPatient = p;
                app.ui.renderDoctorWorkspace();
            } catch (err) {
                app.ui.toast("Patient not found", "error");
            }
        },
        async prescribe() {
            const meds = document.getElementById('rxMeds').value;
            const notes = document.getElementById('rxNotes').value;
            const fileInput = document.getElementById('doctorRxFile');
            if (!meds) return app.ui.toast("Meds cannot be empty", "error");
            let fileUrl = null;
            if (fileInput?.files.length) {
                const formData = new FormData();
                formData.append('file', fileInput.files[0]);
                const baseUrl = window.location.protocol === 'file:' ? 'http://localhost:5000/api' : '/api';
                const res = await fetch(`${baseUrl}/users/upload`, {
                    method: 'POST',
                    headers: { 'Authorization': `Bearer ${localStorage.getItem('mr_token')}` },
                    body: formData
                });
                const data = await res.json();
                fileUrl = data.url;
            }
            try {
                await app.api('/clinical/prescribe', 'POST', { patientId: app.currentPatient.id, medications: meds, notes, fileUrl });
                app.ui.toast("Sent", "success");
                this.loadPrescriptions();
            } catch (err) {}
        },
        async loadPrescriptions() {
            if (!app.currentPatient) return;
            try {
                const list = await app.api(`/clinical/prescriptions?patientId=${app.currentPatient.id}`);
                const container = document.getElementById('doctorPrescriptionsList');
                if (container) {
                    container.innerHTML = list.length === 0 ? '<p>No history.</p>' : list.reverse().map(rx => `
                        <div class="card mb-2">
                            <strong>${rx.medications}</strong><br><small>${new Date(rx.date).toLocaleDateString()}</small>
                            ${rx.fileUrl ? `<br><a href="${rx.fileUrl}" target="_blank">Attachment</a>` : ''}
                        </div>
                    `).join('');
                }
            } catch (err) {}
        }
    },

    chat: {
        async loadMessages() {
            const container = document.getElementById('chatMessages');
            if (!container || !app.currentChatPartner) return;
            try {
                const msgs = await app.api(`/messages/${app.currentChatPartner}`);
                container.innerHTML = msgs.length === 0 ? `<p class="center text-muted">${app.translations[app.lang].no_messages}</p>` : msgs.map(m => {
                    const me = m.senderId === app.user.id;
                    return `
                        <div class="message-wrapper ${me ? 'me' : 'them'}">
                            <div class="message-bubble">
                                ${m.content}
                                <div class="message-time">${new Date(m.createdAt || m.date).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
                            </div>
                        </div>
                    `;
                }).join('');
                container.scrollTop = container.scrollHeight;
            } catch (err) {}
        },
        async send() {
            const input = document.getElementById('chatInput');
            if (!input?.value.trim()) return;
            try {
                await app.api('/messages', 'POST', { receiverId: app.currentChatPartner, content: input.value.trim() });
                input.value = '';
                this.loadMessages();
            } catch (err) {}
        }
    },

    i18n: {
        init() {
            const saved = localStorage.getItem('mr_lang');
            if (saved) app.lang = saved;
            this.apply();
        },
        toggle() {
            app.lang = app.lang === 'en' ? 'ar' : 'en';
            localStorage.setItem('mr_lang', app.lang);
            this.apply();
            location.reload(); // Simplest way to re-render everything
        },
        apply() {
            document.documentElement.setAttribute('dir', app.lang === 'ar' ? 'rtl' : 'ltr');
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (app.translations[app.lang][key]) el.textContent = app.translations[app.lang][key];
            });
            const input = document.getElementById('langText');
            if (input) input.textContent = app.translations[app.lang].lang_name;
        }
    },

    admin: {
        async approve(id) {
            try {
                await app.api(`/admin/applications/${id}`, 'PUT', { status: 'approved' });
                app.ui.toast("Approved", "success");
                app.ui.renderAdminPanel();
            } catch (err) {}
        },
        async reject(id) {
            try {
                await app.api(`/admin/applications/${id}`, 'PUT', { status: 'rejected' });
                app.ui.toast("Rejected", "info");
                app.ui.renderAdminPanel();
            } catch (err) {}
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    app.i18n.init();
    app.auth.init();
});
