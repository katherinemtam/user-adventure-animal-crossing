const USER = 'USER';

export function getUser() {
    const stringyUser = localStorage.getItem(USER);
    const parsedUser = JSON.parse(stringyUser);
    return parsedUser;
}

export function setUser(user) {
    const stringyUser = JSON.stringify(user);
    localStorage.setItem(USER, stringyUser);
}

export function updateUserInfo(questId, choice) {
    const user = getUser();

    user.hp += choice.hp;
    user.bells += choice.bells;
    user.completed[questId] = true;

    setUser(user);
}