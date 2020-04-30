import data
import simulation
import processing

# TESTING PROCESSING 
# print(processing.initialize_student_list(30))
# print(processing.initialize_course_list(data.course_list_dummy))

# TESTING SIMULATION
# courses = simulation.create_classrooms(processing.initialize_course_list(data.course_list), processing.initialize_student_list(3000))

# best case
# students = simulation.best_case(processing.initialize_student_list(300), 30)
# print(students)
# simulation.best_case_nodes(students)

# worst case
students = simulation.best_case(processing.initialize_student_list(300), 90)
print(students)
simulation.best_case_nodes(students)


# Testing
courses = {
    "cs31": {
      "department": "com sci",
      "class_size": "3",   
      "classroom": [0, 1, 3]   
    },
    "math32a": {
      "department": "math",
      "class_size": "3",   
      "classroom": [3, 4, 5]   
    },
    "physics1a": {
      "department": "physics",
      "class_size": "2",   
      "classroom": [2, 4]   
    },
    "scand50": {
      "department": "scand",
      "class_size": "3",   
      "classroom": [0, 2, 5]   
    }
}       


# GENERAL OUTLINE
# 
# COURSE = {
#   "course_name": {
#       department: "" string/enum, //can also be a list if a certain course is cross-listed across departments or is also a GE
#       class_size: "" int,   
#       classroom: []   list of int (each int represents a student)
#    }
# } 
# STUDENT = {
#   id_as_int: {
#       "major: "" string/enum
#       "year": "" int/enum (1, 2, 3, 4)
#       "college": "" string/enum (L&S, HSEAS, etc.)#
#       "num_enrolled": "" int (number of courses student is currently enrolled in)   
#   }
# }
# 
# METHODS:
# 1. randomly sample students into courses
# 2. Constraint methods:    
#       - If a student is enrolled in three courses, they can't be enrolled in any more courses
#       - If a student is in a certain major, they can either
#              - only take major courses (can be based on class year if available)
#              - take 2 major courses and 1 GE
#              - take 1 major course and 2 GEs#
# 3. Generate nodes and edges from classrooms
#
# POTENTIAL ISSUES
# 1. Students double-majoring?
# 2. Undeclared students
# 
# DATA NEEDED
# - list of majors (and associated department)
# - list of departments
# - mapping from courses to departments (or vice-versa)
# - which classes are GEs
# - class restrictions (open to freshman, etc.)
# - students by year in each major or department



# NOTE: Initial attempt: (assign courses to students)
# course_enrollment = {}

# for i in course_list:
#     course_enrollment[i] = []

# num_of_students = 30000
# max_course_size = 400

# for i in range(num_of_students):
#     pick = random.sample(course_list, 3)
#     for j in range(len(pick)):
#         course_enrollment[pick[j]].append(i)
#         if len(course_enrollment[pick[j]]) == max_course_size:
#             course_list.remove(pick[j])

#print(course_enrollment)

# with open('simulation.json', 'w') as json_file:
#   json.dump(course_enrollment, json_file)

# for key in course_enrollment:
#     for key_2 in course_enrollment:
#         print(set(course_enrollment[key]).intersection(course_enrollment[key_2]))