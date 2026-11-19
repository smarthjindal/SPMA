// Student Placement Management Analytics (SPMA) Authentication & Storage Utilities

// localStorage keys
const STORAGE_KEYS = {
    USER: 'spma_user',
    LOGGED_IN: 'spma_logged_in',
    SELECTED_DOMAIN: 'spma_selected_domain',
    TEST1_RESULTS: 'spma_test1_results',
    TEST2_RESULTS: 'spma_test2_results',
    TEST1_ANSWERS: 'spma_test1_answers',
    TEST2_ANSWERS: 'spma_test2_answers',
    COURSES_COMPLETED: 'spma_courses_completed',
    CURRENT_TEST: 'spma_current_test' // 1 or 2
};

function isLoggedIn() {
    return localStorage.getItem(STORAGE_KEYS.LOGGED_IN) === 'true';
}

function getCurrentUser() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.USER) || '{}');
}

function loginUser(email, password) {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEYS.USER) || '{}');
    if (stored.email === email && stored.password === password) {
        localStorage.setItem(STORAGE_KEYS.LOGGED_IN, 'true');
        return { success: true };
    }
    return { success: false, message: 'Invalid email or password' };
}

function registerUser(name, email, password) {
    const user = { name, email, password, registeredAt: new Date().toISOString() };
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
    localStorage.setItem(STORAGE_KEYS.LOGGED_IN, 'true');
    return { success: true };
}

function logout() {
    localStorage.removeItem(STORAGE_KEYS.LOGGED_IN);
    window.location.href = 'login.html';
}

function requireAuth() {
    if (!isLoggedIn()) {
        window.location.href = 'login.html';
        return false;
    }
    return true;
}

function getSelectedDomain() {
    return localStorage.getItem(STORAGE_KEYS.SELECTED_DOMAIN);
}

function setSelectedDomain(domainId) {
    localStorage.setItem(STORAGE_KEYS.SELECTED_DOMAIN, domainId);
}

function getTestResults(testNumber) {
    const key = testNumber === 1 ? STORAGE_KEYS.TEST1_RESULTS : STORAGE_KEYS.TEST2_RESULTS;
    return JSON.parse(localStorage.getItem(key) || 'null');
}

function saveTestResults(testNumber, results) {
    const key = testNumber === 1 ? STORAGE_KEYS.TEST1_RESULTS : STORAGE_KEYS.TEST2_RESULTS;
    localStorage.setItem(key, JSON.stringify(results));
}

function getCompletedCourses() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.COURSES_COMPLETED) || '[]');
}

function toggleCourseCompleted(courseId) {
    let completed = getCompletedCourses();
    if (completed.includes(courseId)) {
        completed = completed.filter(id => id !== courseId);
    } else {
        completed.push(courseId);
    }
    localStorage.setItem(STORAGE_KEYS.COURSES_COMPLETED, JSON.stringify(completed));
    return completed;
}

function getCurrentTestNumber() {
    return parseInt(localStorage.getItem(STORAGE_KEYS.CURRENT_TEST) || '1');
}

function setCurrentTestNumber(num) {
    localStorage.setItem(STORAGE_KEYS.CURRENT_TEST, num.toString());
}

function hasCompletedTest(testNumber) {
    return getTestResults(testNumber) !== null;
}

function clearAllData() {
    Object.values(STORAGE_KEYS).forEach(key => localStorage.removeItem(key));
}

// Mobile menu toggle
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu) menu.classList.toggle('hidden');
}

// Update navbar with user name if logged in
function updateNavbar() {
    const userNameEl = document.getElementById('nav-username');
    if (userNameEl && isLoggedIn()) {
        const user = getCurrentUser();
        userNameEl.textContent = user.name || 'Student';
    }
}

document.addEventListener('DOMContentLoaded', updateNavbar);
