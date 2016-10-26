import React, {PropTypes} from 'react';
import CourseListRow from './CourseListRow';

const CourseList = ({courses, onDelete, deleting}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>&nbsp;</th>
        <th>Title</th>
        <th>Author</th>
        <th>Category</th>
        <th>Length</th>
        <th width="100px">&nbsp;</th>
      </tr>
      </thead>
      <tbody>
      {courses.map(course =>
        <CourseListRow
          key={course.id} course={course}
          onDelete={onDelete}
          deleting={deleting}
          />
      )}
      </tbody>
    </table>
  );
};

CourseList.propTypes = {
  courses: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  deleting: PropTypes.bool
};

export default CourseList;
