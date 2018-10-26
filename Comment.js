class Comment{
	constructor(subject){
		this.subject=subject;
		this.tr=document.createElement("tr");
		for(var i=0;i<5;i++){
			this.td=	document.createElement("td");
			this.td.innerText=this.subject;
			this.tr.appendChild(this.td);
		}
	}
}