function pageAnalyse(configArray) {
    alert(111)
    var str = "";
    var totalPage = parseInt(configArray["totalPage"]);
    var currentPage = parseInt(configArray["currentPage"]);
    var pageSize = parseInt(configArray["pageSize"]);
    var methodName = configArray["methodName"];
    var value=configArray["value"];
    var crmUserId=configArray["crmUserId"]
    //上一页
    if(currentPage == 1) {
        str+= "<li class='disabled'><a href='javascript:void(0)' aria-label=\"Previous\"><span aria-hidden=\"true\">&laquo;</span></a></li>\n";
    } else {
        str+= "<li><a href='javascript:void(0)' onclick='" + methodName + "("+crmUserId+","+"\"" + value + "\""+","+  (currentPage-1) + ", " + pageSize + ")'>&laquo;</a></li>\n";
    }
    //页数较少时
    if(totalPage < 10) {
        for(var i=1; i<= totalPage; i++) {
            if(i == currentPage)
                str+= "<li class='active'><a style='cursor:pointer;' href='javascript:void(0)' onclick='" + methodName + "("+crmUserId+","+"\"" + value + "\""+","+  i + ", " + pageSize + ")'>" + i+ "</a></li>\n";
            else
                str+= "<li><a href='javascript:void(0)' onclick='" + methodName + "("+crmUserId+","+"\"" + value + "\""+","+  i + ", " + pageSize + ")'>" + i + "</a></li>\n";
        }
    } else {
        //页数较多时
        //第一页
        if(currentPage == 1)
            str+= "<li class='active'><a style='cursor:pointer;' href='javascript:void(0)' onclick='" + methodName + "("+crmUserId+","+"\"" + value + "\""+","+ 1+", " + pageSize + ")'>1</a></li>\n";
        else
            str+= "<li><a href='javascript:void(0)' onclick='" + methodName + "("+crmUserId+","+"\"" + value + "\""+","+ 1+", " + pageSize + ")'>1</a></li>\n";

        //如果与第一页衔接
        if(currentPage -4 <= 1) {
            //连接第一页
            for(var i=2; i< currentPage; i++) {
                str+= "<li><a href='javascript:void(0)' onclick='" + methodName + "("+crmUserId+","+"\"" + value + "\""+","+ i + ", " + pageSize + ")'>" + i + "</a></li>\n";
            }
            //如果当前页不是第一页则连接当前页
            if(currentPage != 1)
                str+= "<li class='active'><a style='cursor:pointer;' href='javascript:void(0)' onclick='" + methodName + "("+crmUserId+","+"\"" + value + "\""+","+ currentPage + ", " + pageSize + ")'>" + currentPage+ "</a></li>\n";
            //延伸到第七位
            for(var i=currentPage + 1; i<=7; i++) {
                str+= "<li><a href='javascript:void(0)' onclick='" + methodName + "("+crmUserId+","+"\"" + value + "\""+","+ i + ", " + pageSize + ")'>" + i + "</a></li>\n";
            }
            //添加省略号并连接到最后一页
            str+= "<li><a href='javascript:void(0)'>...</a></li>\n";
        } else {
            //省略号连接第一页
            str+= "<li><a href='javascript:void(0)'>...</a></li>\n";
            var startPage;
            var endPage;
            //如果与最后一页相邻
            if(currentPage +4 >= totalPage) {
                startPage = totalPage - 6;
                endPage = totalPage - 1;
            } else {
                startPage = currentPage - 2;
                endPage = currentPage + 2;
            }
            for(var i = startPage; i<=endPage; i++) {
                if(i == currentPage)
                    str+= "<li class='active'><a style='cursor:pointer;' href='javascript:void(0)' onclick='" + methodName + "("+crmUserId+","+"\"" + value + "\""+","+ i + ", " + pageSize + ")'>" + i+ "</a></li>\n";
                else
                    str+= "<li><a href='javascript:void(0)' onclick='" + methodName + "("+crmUserId+","+"\"" + value + "\""+","+ i + ", " + pageSize + ")'>" + i + "</a></li>\n";
            }
            //如果无法连接到最后一页则用省略号连接最后一页
            if(currentPage +4 < totalPage) {
                str+= "<li><a href='javascript:void(0)'>...</a></li>\n";
            }
        }
        //最后一页
        if(currentPage == totalPage)
            str+= "<li class='active'><a style='cursor:pointer;' href='javascript:void(0)' onclick='" + methodName + "("+crmUserId+","+"\"" + value + "\""+","+ totalPage + ", " + pageSize + ")'>" + totalPage + "</a></li>\n";
        else
            str+= "<li><a href='javascript:void(0)' onclick='" + methodName + "("+crmUserId+","+"\"" + value + "\""+","+ totalPage + ", " + pageSize + ")'>" + totalPage + "</a></li>\n";
    }
    //下一页
    if(currentPage == totalPage) {
        str+= "<li class='disabled'><a href='javascript:void(0)'>&raquo;</a></li>\n";
    } else {
        str+= "<li><a href='javascript:void(0)' aria-label=\"Next\" onclick='" + methodName + "("+crmUserId+","+"\"" + value + "\""+","+ (1+currentPage) + ", " + pageSize + ")'><span aria-hidden=\"true\">&raquo;</span></a></li>\n";
    }
    //设置
    $(configArray["selector"]).html(str);
}


