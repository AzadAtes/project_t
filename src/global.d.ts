declare type Task = {
	id: string;
	name: string;
	description?: String;
	dueDateAndTime?: String;

	subTasks?: Task[];

	complete?: boolean;
	date?: null;
	fullDate?: Date;
	important?: Boolean;
	myDay?: Boolean;
	planned?: Boolean;
};
