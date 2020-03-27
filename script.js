const userLeftImg = document.querySelector(".user__left img");

userLeftImg.addEventListener("click", () => {
	userLeftImg.classList.toggle("userBookmarkActive");
})