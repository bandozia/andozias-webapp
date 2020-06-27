import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Group } from '../model/group.model';

const SERVER_URL = "http://localhost:5000/api/groups/create";

@Injectable({
	providedIn: 'root'
})
export class GroupService {

	constructor(private http: HttpClient) { }

	public createGroup(name: string) {
		return this.http.post(SERVER_URL, {Name: name}, {responseType: 'text'});
	}

	
}
