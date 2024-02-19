import { defineStore } from "pinia";
import { ref } from "vue";

export const useTaskStore = defineStore("tasks", () => {
	const tasks = ref<Task[]>([
		{
			id: "1",
			name: "Push-Workout",
			description: "",
			dueDateAndTime: "Today 15:45",
			subTasks: [
				{
					id: "110",
					name: "Pushups",
					subTasks: [
						{
							id: "111",
							name: "Set 1. 10x",
						},
						{
							id: "112",
							name: "Set 1. 10x",
							subTasks: [
								{
									id: "1111",
									name: "Set 1. 10x",
									subTasks: [
										{
											id: "111",
											name: "Set 1. 10x",
										},
										{
											id: "112",
											name: "Set 1. 10x",
											subTasks: [
												{
													id: "1111",
													name: "Set 1. 10x",
												},
												{
													id: "1112",
													name: "Set 1. 10x",
												},
											],
										},
										{
											id: "113",
											name: "Set 1. 10x",
										},
										{
											id: "114",
											name: "Set 1. 10x",
										},
									],
								},
								{
									id: "1112",
									name: "Set 1. 10x",
								},
							],
						},
						{
							id: "113",
							name: "Set 1. 10x",
						},
						{
							id: "114",
							name: "Set 1. 10x",
						},
					],
				},
				{
					id: "120",
					name: "Dips",
					subTasks: [
						{
							id: "121",
							name: "Set 1. 12x",
						},
						{
							id: "122",
							name: "Set 1. 12x",
						},
						{
							id: "123",
							name: "Set 1. 12x",
						},
					],
				},
			],
		},
		{
			id: "2",
			name: "This is my very second Task.",
			description: "This is a very long and precise description of the task at hand.",
			dueDateAndTime: "Tomorrow 15:45",
			subTasks: [
				{
					id: "210",
					name: "SubTask 1",
				},
			],
		},
		{ id: "3", name: "task 3" },
		{ id: "4", name: "task 4" },
		{ id: "5", name: "task 5" },
		{ id: "6", name: "task 6" },
		{
			id: "1",
			name: "Push-Workout",
			description: "",
			dueDateAndTime: "Today 15:45",
			subTasks: [
				{
					id: "110",
					name: "Pushups",
					subTasks: [
						{
							id: "111",
							name: "Set 1. 10x",
						},
						{
							id: "112",
							name: "Set 1. 10x",
							subTasks: [
								{
									id: "1111",
									name: "Set 1. 10x",
									subTasks: [
										{
											id: "111",
											name: "Set 1. 10x",
										},
										{
											id: "112",
											name: "Set 1. 10x",
											subTasks: [
												{
													id: "1111",
													name: "Set 1. 10x",
												},
												{
													id: "1112",
													name: "Set 1. 10x",
												},
											],
										},
										{
											id: "113",
											name: "Set 1. 10x",
										},
										{
											id: "114",
											name: "Set 1. 10x",
										},
									],
								},
								{
									id: "1112",
									name: "Set 1. 10x",
								},
							],
						},
						{
							id: "113",
							name: "Set 1. 10x",
						},
						{
							id: "114",
							name: "Set 1. 10x",
						},
					],
				},
				{
					id: "120",
					name: "Dips",
					subTasks: [
						{
							id: "121",
							name: "Set 1. 12x",
						},
						{
							id: "122",
							name: "Set 1. 12x",
						},
						{
							id: "123",
							name: "Set 1. 12x",
						},
					],
				},
			],
		},
		{
			id: "2",
			name: "This is my very second Task.",
			description: "This is a very long and precise description of the task at hand.",
			dueDateAndTime: "Tomorrow 15:45",
			subTasks: [
				{
					id: "210",
					name: "SubTask 1",
				},
			],
		},
		{ id: "3", name: "task 3" },
		{ id: "4", name: "task 4" },
		{ id: "5", name: "task 5" },
		{ id: "6", name: "task 6" },
	]);

	return { tasks };
});
