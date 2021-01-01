var arrList = [
    {
        title: '低压焊机',
        image: './images/420.jpg',
        dsec: '低压焊机1111',
        typeCont: '85',
        name: '君邦',
        specs: '超取满1.500包邮',
        type: '满额赠礼；满件折扣'
    },
    {
        title: '低压焊机11',
        image: './images/400.jpg',
        dsec: '低压焊机1111',
        typeCont: '8511',
        name: '君邦11',
        specs: '超取满1.500包邮111',
        type: '满额赠礼；满件折扣111'
    },
    {
        title: '低压焊机22',
        image: './images/1.jpg',
        dsec: '低压焊机222',
        typeCont: '8522',
        name: '君邦222',
        specs: '超取满1.500包邮1221',
        type: '满额赠礼；满件折扣1222'
    },
    {
        title: '低压焊机2233',
        image: './images/500.jpg',
        dsec: '低压焊机22233',
        typeCont: '852233',
        name: '君邦222',
        specs: '超取满1.500包邮12213',
        type: '满额赠礼；满件折扣122233'
    },
    {
        title: '低压焊机2233',
        image: './images/500.jpg',
        dsec: '低压焊机22233',
        typeCont: '55555555555555555555',
        name: '君邦222',
        specs: '超取满1.500包邮12213',
        type: '满额赠礼；满件折扣122233'
    },


]

function addList() {
    for (let i = 0; i < arrList.length; i++) {
        console.log(arrList[i], 6161654)
        let html = `<div class="list_itme">
            <div class="imgs_left ">
                <img class="imgs" src="${arrList[i].image}" />
            </div>
            <div class="content_text">
                <h6 class="title">${arrList[i].title}</h6>
                <ul class="item_text">
                    <li><a href="javascript:;">${arrList[i].dsec}</a></li>
                    <li>型号:${arrList[i].typeCont}</li>
                    <li>品牌 ${arrList[i].name}</li>
                    <li>规格 ${arrList[i].specs}</li>
                    <li>类型 ${arrList[i].type}</li>
                </ul>
            </div>
        </div>
        `
        console.log(html, 'html')
        $('#content_list').append(html)
    }
}
addList()
