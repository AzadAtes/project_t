declare type Task = {
	id: string;
	name: string;
	description?: String;
	dueDateAndTime?: String;

	reps?: Rep[];
	subTasks?: Task[];

	complete?: boolean;
	date?: null;
	fullDate?: Date;
	important?: Boolean;
	myDay?: Boolean;
	planned?: Boolean;
};

declare type Rep = {
	id: string;
	name: string;
	count: number;
};
