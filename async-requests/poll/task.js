  const button = document.createElement("button");
        button.textContent = element;
        answer.appendChild(button);

        button.addEventListener("click", () => {
          alert("Спасибо, ваш голос засчитан!");
        });
  catch((error) => {
    console.error("Ошибка при получении данных:", error);
  });