//условие ? (выполнится это если условие верно) : (выполнится это если условие не верно, лож)
export const addZero = n => n < 10 ? '0' + n : n; // добавляем 0 перед минутами и секундами, если число <10 (тернарный оператор "?")