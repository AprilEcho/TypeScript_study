// 定义食物
class Food {
  //定义一个属性表示食物所对应的元素
  element: HTMLElement;

  constructor() {
    this.element = document.getElementById('food')!;
  }

  //定义一个获取食物X轴坐标的方法
  get X() {
    return this.element.offsetLeft;
  }

  //定义一个获取食物Y轴坐标的方法
  get Y() {
    return this.element.offsetTop;
  }

  //修改食物的位置
  change() {
    let left = Math.round(Math.random() * 29) * 10;
    let top = Math.round(Math.random() * 29) * 10;

    this.element.style.left = left + 'px'
    this.element.style.top = top + 'px'
  }

}

export default Food;