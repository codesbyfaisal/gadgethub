const showToast = (toastNote) => {
  const toastBox = document.querySelector(".toast-box")
  toastBox.innerHTML = toastNote;
  toastBox.style.right="1rem"
  setTimeout(() => {
    toastBox.style.right="-100%"
  }, 1500)
}

export default showToast