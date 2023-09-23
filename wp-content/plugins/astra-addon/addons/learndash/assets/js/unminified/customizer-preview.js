/**
 * This file adds some LIVE to the Customizer live preview. To leverage
 * this, set your custom settings to 'postMessage' and then add your handling
 * here. Your javascript should grab settings from customizer controls, and
 * then make any necessary changes to the page using jQuery.
 *
 * @package Astra Addon
 * @since  1.0.0
 */

( function( $ ) {

	/**
	 * Table Border Radius
	 */
	wp.customize( 'astra-settings[learndash-table-border-radius]', function( value ) {
		value.bind( function( border_radius ) {

			var dynamicStyle = '';

			/**
			 * Table Border Radius
			 */
			dynamicStyle += ' body #learndash_lessons #lesson_heading, body #learndash_profile .learndash_profile_heading, body #learndash_quizzes #quiz_heading, body #learndash_lesson_topics_list div > strong { border-top-left-radius: ' + border_radius + 'px; border-top-right-radius: ' + border_radius + 'px;}';
			dynamicStyle += ' body #learndash_lessons #quiz_list, body #learndash_lessons .lessons_list, body #learndash_quizzes #quiz_list, body #learndash_quizzes .lessons_list, body #learndash_lesson_topics_list .learndash_topic_dots ul, body #learndash_profile .profile_info, body #learndash_profile #course_list { border-bottom-left-radius: ' + border_radius + 'px; border-bottom-right-radius: ' + border_radius + 'px;}';

			astra_add_dynamic_css( 'learndash-table-border-radius', dynamicStyle );
		} );
	} );

	// Learndash Colors
	astra_css( 'astra-settings[learndash-table-heading-color]', 'color', 'body #learndash_lessons #lesson_heading, body #learndash_profile .learndash_profile_heading, body #learndash_quizzes #quiz_heading, body #learndash_lesson_topics_list div > strong, body #learndash_profile .learndash_profile_quiz_heading' );
	astra_css( 'astra-settings[learndash-table-heading-bg-color]', 'background-color', 'body #learndash_lessons #lesson_heading, body #learndash_profile .learndash_profile_heading, body #learndash_quizzes #quiz_heading, body #learndash_lesson_topics_list div > strong, body #learndash_profile .learndash_profile_quiz_heading' );
	astra_css( 'astra-settings[learndash-table-title-color]', 'color', 'body #learndash_lessons a, body #learndash_quizzes a, body .learndash_topic_dots a, body .learndash_topic_dots a > span, body #learndash_lesson_topics_list span a, body #learndash_profile a, body #learndash_profile a span, #lessons_list .list-count, #quiz_list .list-count, #learndash_profile .list_arrow.collapse' );
	astra_css( 'astra-settings[learndash-table-title-bg-color]', 'background-color', 'body #course_list > div:nth-of-type(odd), body #lessons_list > div:nth-of-type(odd), body #quiz_list > div:nth-of-type(odd), body #learndash_lesson_topics_list .learndash_topic_dots ul > li.nth-of-type-odd' );
	astra_css( 'astra-settings[learndash-table-title-separator-color]', 'border-color', 'body #learndash_lessons #quiz_list, body #learndash_lessons .lessons_list, body #learndash_quizzes #quiz_list, body #learndash_quizzes .lessons_list, #lessons_list > div h4, #course_list > div h4, #quiz_list > div h4, #learndash_lesson_topics_list ul > li > span.topic_item, #lessons_list > div > div, #course_list > div > div, #quiz_list > div > div, .single-sfwd-lessons #learndash_lesson_topics_list ul > li > span.sn, .singular-sfwd-lessons #learndash_lesson_topics_list ul > li > span.sn, body #learndash_profile .profile_info, body #learndash_profile #course_list, body #learndash_lesson_topics_list .learndash_topic_dots .topic-completed, body #learndash_lesson_topics_list .learndash_topic_dots .topic-notcompleted, body #learndash_lesson_topics_list div > strong' );
	astra_css( 'astra-settings[learndash-complete-icon-color]', 'color', '.learndash .completed:before, #learndash_profile .completed:before, .learndash_topic_dots ul .topic-completed span:before, .learndash_navigation_lesson_topics_list .topic-completed span:before, .learndash_navigation_lesson_topics_list ul .topic-completed span:before, .learndash .topic-completed span:before, body .list_arrow.lesson_completed:before' );
	astra_css( 'astra-settings[learndash-incomplete-icon-color]', 'color', '.learndash .notcompleted:before, #learndash_profile .notcompleted:before, .learndash_topic_dots ul .topic-notcompleted span:before, .learndash_navigation_lesson_topics_list .topic-notcompleted span:before, .learndash_navigation_lesson_topics_list ul .topic-notcompleted span:before, .learndash .topic-notcompleted span:before, body .list_arrow.lesson_incomplete:before' );

	// Typography Header

	astra_generate_outside_font_family_css( 'astra-settings[font-family-learndash-table-heading]', 'body #learndash_lessons #lesson_heading, body #learndash_profile .learndash_profile_heading, body #learndash_quizzes #quiz_heading, body #learndash_lesson_topics_list div > strong' );

	astra_css( 'astra-settings[font-weight-learndash-table-heading]', 'font-weight', 'body #learndash_lessons #lesson_heading, body #learndash_profile .learndash_profile_heading, body #learndash_quizzes #quiz_heading, body #learndash_lesson_topics_list div > strong' );
	
	astra_css( 'astra-settings[text-transform-learndash-table-heading]', 'text-transform', 'body #learndash_lessons #lesson_heading, body #learndash_profile .learndash_profile_heading, body #learndash_quizzes #quiz_heading, body #learndash_lesson_topics_list div > strong' );

	astra_responsive_font_size( 'astra-settings[font-size-learndash-table-heading]', 'body #learndash_lessons #lesson_heading, body #learndash_profile .learndash_profile_heading, body #learndash_quizzes #quiz_heading, body #learndash_lesson_topics_list div > strong' );

	// Typography Content

	astra_generate_outside_font_family_css( 'astra-settings[font-family-learndash-table-content]', 'body #learndash_lessons #quiz_list, body #learndash_lessons .lessons_list, body #learndash_quizzes #quiz_list, body #learndash_quizzes .lessons_list, body #learndash_lesson_topics_list .learndash_topic_dots ul, body #learndash_profile .profile_info, body #learndash_profile #course_list, body #learndash_lessons a, body #learndash_quizzes a, .learndash_topic_dots a, .learndash_topic_dots a > span, #learndash_lesson_topics_list span a, #learndash_profile a, #learndash_profile a span, body #learndash_profile a, body #learndash_profile .learndash_profile_heading.course_overview_heading, body #learndash_profile #course_list .flip > div .right, body .learndash_topic_dots a > span' );

	astra_css( 'astra-settings[font-weight-learndash-table-content]', 'font-weight', 'body #learndash_lessons #quiz_list, body #learndash_lessons .lessons_list, body #learndash_quizzes #quiz_list, body #learndash_quizzes .lessons_list, body #learndash_lesson_topics_list .learndash_topic_dots ul, body #learndash_profile .profile_info, body #learndash_profile #course_list, #learndash_lessons a, #learndash_quizzes a, .learndash_topic_dots a, .learndash_topic_dots a > span, #learndash_lesson_topics_list span a, #learndash_profile a, #learndash_profile a span' );
	
	astra_css( 'astra-settings[text-transform-learndash-table-content]', 'text-transform', 'text-transform-learndash-table-content', 'body #learndash_lessons #quiz_list, body #learndash_lessons .lessons_list, body #learndash_quizzes #quiz_list, body #learndash_quizzes .lessons_list, body #learndash_lesson_topics_list .learndash_topic_dots ul, body #learndash_profile .profile_info, body #learndash_profile #course_list, #learndash_lessons a, #learndash_quizzes a, .learndash_topic_dots a, .learndash_topic_dots a > span, #learndash_lesson_topics_list span a, #learndash_profile a, #learndash_profile a span' );

	astra_responsive_font_size( 'astra-settings[font-size-learndash-table-content]', 'body #learndash_lessons #quiz_list, body #learndash_lessons .lessons_list, body #learndash_quizzes #quiz_list, body #learndash_quizzes .lessons_list, body #learndash_lesson_topics_list .learndash_topic_dots ul, body #learndash_profile .profile_info, body #learndash_profile #course_list, body #learndash_lessons a, #learndash_quizzes a, .learndash_topic_dots a, .learndash_topic_dots a > span, #learndash_lesson_topics_list span a, #learndash_profile a, #learndash_profile a span' );

} )( jQuery );