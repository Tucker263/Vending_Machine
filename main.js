//商品クラス
class Item{
    constructor(name, price, src){
        this.name = name;
        this.price = price;
        this.src = src;
    }
}

//item読み取り専用
const items = [
    new Item("candy", "6$", "https://cdn.pixabay.com/photo/2012/06/27/15/02/candy-50838__480.jpg"), 
    new Item("crisps", "5$", "https://media.istockphoto.com/photos/potato-chips-in-a-wooden-plate-on-a-white-background-isolated-picture-id1216998914?b=1&k=6&m=1216998914&s=170667a&w=0&h=Ln32BRVHQXn7G9AU9752Gq7TYQlgHYLNpOfRcZcit8M="), 
    new Item("cookie", "5$", "https://media.istockphoto.com/photos/close-up-of-freshly-baked-chocolate-chip-cookies-on-cooling-rack-picture-id1219060141?b=1&k=6&m=1219060141&s=170667a&w=0&h=NWEMqhlbdpJSyeYs9mTbV1sFpKAobUsOM41JqiHpgR0="), 
    new Item("macaron", "9$", "https://media.istockphoto.com/photos/three-macaroon-each-other-and-one-next-picture-id1220534607?b=1&k=6&m=1220534607&s=170667a&w=0&h=lvOqMfZHribWOKWtmEdmwewyRMNzzhpsW20Jha9EWT4="), 
    new Item("cake", "3$", "https://media.istockphoto.com/photos/white-chocolate-strawberry-yogurt-cake-decorated-with-fresh-fruits-picture-id904471916?b=1&k=6&m=904471916&s=170667a&w=0&h=NN1g8sGvAioZ5404uADomOMRfVABkkGvJFhOo3VgW68="), 
    new Item("donut", "5$", "https://cdn.pixabay.com/photo/2014/06/30/11/52/doughnut-380212__480.jpg"), 
    new Item("castella", "8$", "https://media.istockphoto.com/photos/castella-picture-id510967270?b=1&k=6&m=510967270&s=170667a&w=0&h=NSfcpN8xfj_vZ9e1QUMPx6WKA2ZZVH3BEUAyqZ1JuNE="), 
    new Item("pudding", "6$", "https://media.istockphoto.com/photos/delicious-homemade-creme-caramel-dessert-picture-id1211669113?b=1&k=6&m=1211669113&s=170667a&w=0&h=Mkr2medgVCSTlx-h6HKLx5UsDMLFBDDJGNO1az_CBPk="), 
    new Item("churros", "2$", "https://cdn.pixabay.com/photo/2017/03/30/15/47/churros-2188871__480.jpg")];

//自動販売機クラス
class VendingMachine{
    //自動販売機のレイアウトをセットする関数
    static setLayout(){
        let targetDiv = document.getElementById("target");
        let moveVendingDiv = document.createElement("div");
        moveVendingDiv.classList.add("d-flex", "justify-content-center", "pt-5");
        targetDiv.append(moveVendingDiv);

        //自動販売機の本体作成
        let vendingBodyDiv = document.createElement("div");
        vendingBodyDiv.classList.add("bg-primary", "p-3", "d-flex", "align-items-center", "col-sm-10", "col-md-8", "col-lg-6");
        moveVendingDiv.append(vendingBodyDiv);

        //自動販売機の左部分作成
        let leftBox = document.createElement("div");
        leftBox.classList.add("col-8");
        vendingBodyDiv.append(leftBox);
            //商品画像部分の作成
        let leftBgDiv = document.createElement("div");
        leftBgDiv.classList.add("bg-secondary", "p-4", "d-flex", "justify-content-center");
        leftBox.append(leftBgDiv);
        let sliderBox = document.createElement("div");
        sliderBox.classList.add("d-flex","p-2", "bg-dark");
        sliderBox.id = "sliderBox";
        sliderBox.style = "height:200px; width:200px";
        leftBgDiv.append(sliderBox);
            //pushボタンの作成
        let pushBtnDiv = document.createElement("div");
        pushBtnDiv.classList.add("d-flex", "justify-content-center", "p-3");
        leftBox.append(pushBtnDiv);
        let pushBtnBody = document.createElement("button");
        pushBtnBody.classList.add("btn", "btn-secondary", "text-white", "col-8");
        pushBtnBody.id = "pushBtn";
        pushBtnBody.type = "button";
        pushBtnBody.innerHTML = "push";
        pushBtnDiv.append(pushBtnBody);

        //自動販売機の右部分作成
        let rightBox = document.createElement("div");
        rightBox.classList.add("col-4");
        vendingBodyDiv.append(rightBox);
            //商品の番号の表示の土台作成
        let itemInfoBox = document.createElement("div");
        itemInfoBox.classList.add("bg-secondary", "d-flex", "align-items-center", "p-3");
        rightBox.append(itemInfoBox);
        let itemNumDiv = document.createElement("div");
        itemNumDiv.classList.add("bg-danger", "col-4", "d-flex", "justify-content-center", "align-items-center");
        itemInfoBox.append(itemNumDiv);
        let itemNumP = document.createElement("p");
        itemNumP.classList.add("text-white");
        itemNumP.style = "font-size:2rem";
        itemNumP.id = "itemNumber";
        itemNumDiv.append(itemNumP);
            //商品の名前と値段表示の土台作成
        let itemInfoDiv = document.createElement("div");
        itemInfoDiv.classList.add("col-8", "d-flex", "justify-content-center");
        itemInfoBox.append(itemInfoDiv);
        let itemInfoP = document.createElement("p");
        itemInfoP.style = "font-size:1.3rem";
        itemInfoP.id = "itemInfo";
        itemInfoDiv.append(itemInfoP);
            //商品番号のボタンの土台作成
        let itemBtnDiv = document.createElement("div"); 
        itemBtnDiv.classList.add("bg-secondary", "d-flex", "justify-content-around", "flex-wrap", "mt-3");
        itemBtnDiv.id = "itemBtnDiv";
        rightBox.append(itemBtnDiv);
    }

    //商品を自動販売機にセットする関数
    static setItems(){
        //商品の情報の表示部分の作成
        document.getElementById("itemNumber").innerHTML = "1";
        document.getElementById("itemInfo").innerHTML = items[0].name + "<br>" + items[0].price;
        //商品の番号のボタンの作成
        for(let index=1; index<=items.length; index++){
            let itembtn = document.createElement("button");
            itembtn.classList.add("btn", "btn-primary", "text-white", "col-3", "m-1");
            itembtn.type = "button";
            itembtn.innerHTML = index;
            itembtn.id = index;
            document.getElementById("itemBtnDiv").append(itembtn);
        }
        //商品の初期画像を配置
        document.getElementById("sliderBox").setAttribute("display-num", "1");
        let initImg = document.createElement("img");
        initImg.src = items[0].src;
        initImg.classList.add("w-100", "h-100");
        document.getElementById("sliderBox").append(initImg);
    }

    //EventListenerをセットする関数
    static setEventLis(){
        //pushボタンの設定
        document.getElementById("pushBtn").addEventListener("click",function(){
            let itemNum = Number(document.getElementById("sliderBox").getAttribute("display-num"));
            alert("You bought " + items[itemNum-1].name + "(" + items[itemNum-1].price + ") !");
    });
        //itemボタンの設定
        for(let index=1; index<=items.length; index++){
            let itemBtn = document.getElementById(index);
            itemBtn.addEventListener("click",function(){
                SliderFunctions.sliderItem(index);
                SliderFunctions.changeItemInfo(index);
            });
        }
    }
}

//スライダーの関数コンテナ
class SliderFunctions{
    static sliderItem(btnNum){
        //sliderBoxの初期化
        document.getElementById("sliderBox").innerHTML="";
        //mainBoxの作成
        let main = document.createElement("div");
        main.classList.add("expand-animation");
        let mainImg = document.createElement("img");
        mainImg.src = items[btnNum-1].src;
        mainImg.classList.add("h-100", "w-100");
        main.append(mainImg);
        //extraBoxの作成
        let extra = document.createElement("div");
        extra.classList.add("deplete-animation");
        let extraImg = document.createElement("img");
        let extraNum = Number(document.getElementById("sliderBox").getAttribute("display-num"));
        extraImg.src = items[extraNum-1].src;
        extraImg.classList.add("h-100", "w-100");
        extra.append(extraImg);
        document.getElementById("sliderBox").setAttribute("display-num", String(btnNum));
    
        if(btnNum < extraNum){
            //左方向スライダー
            document.getElementById("sliderBox").append(main);
            document.getElementById("sliderBox").append(extra);
        }else if(btnNum > extraNum){
            //右方向スライダー
            document.getElementById("sliderBox").append(extra);
            document.getElementById("sliderBox").append(main);
        }else{
            document.getElementById("sliderBox").append(mainImg);
        }
    }

    //itemの情報の表示を変更する関数
    static changeItemInfo(btnNum){
        document.getElementById("itemNumber").innerHTML = btnNum;
        document.getElementById("itemInfo").innerHTML = items[btnNum-1].name  + "<br>" + items[btnNum-1].price;
    }
}

//メイン関数
function main(){
    VendingMachine.setLayout();
    VendingMachine.setItems();
    VendingMachine.setEventLis();
}

main();