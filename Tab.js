window.onload=function(){
	;(function(element){
/* ;(function(element){})();前的分号的作用
* 1、防止多文件集成成一个文件后，高压缩出现语法错误。
*  2、这是一个匿名函数，一般js库都采用这种自执行的匿名函数来保护内部变量 
*  (function(){})()
*  3、因为undefined是window的属性，声明为局部变量之后，在函数中如果再有变量
* 与undefined作比较的话，程序就可以不用搜索undefined到window，可以提高程序性能
*/
		function TabSwitch(){
			this.version='v 1.0.0';

		}
		TabSwitch.prototype={
			constructor:TabSwitch,
			switch:function(){
				var aInput=document.getElementsByTagName('li');
				var aDiv=document.getElementsByClassName(element)[0].children;
				for(var i=0;i<aInput.length;i++){
				   aInput[0].className='active';
				   aDiv[0].style.display='block';
				   aInput[i].index=i;
					aInput[i].onclick=function(){
						for(var i=0;i<aInput.length;i++){
							aInput[i].className='';
							aDiv[i].style.display='none';
						}
						aDiv[this.index].style.display='block';
						this.className="active";
					}
				}
			}
		}
		var tabSwitch = new TabSwitch();
		tabSwitch.switch();
	})('tabContent');	
}


